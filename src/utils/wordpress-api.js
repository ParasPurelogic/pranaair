// WordPress API utility functions for WPML integration

const WORDPRESS_API_URL = "https://www.pranaair.com/wp-json/wp/v2"

// WPML language mapping
const LANGUAGE_MAPPING = {
    "": "en", // Default English
    hi: "hi", // Hindi
    en: "en", // English
}

// Category mapping for different languages - UPDATE THESE IDs
const CATEGORY_MAPPING = {
    "case-studies": {
        en: 193, // English case studies category ID
        hi: 193, // Use same ID for now, will try different methods
    },
    blogs: {
        en: 1, // English blog category ID
        hi: 1, // Use same ID for now, will try different methods
    },
    news: {
        en: 196, // English news category ID
        hi: 196, // Use same ID for now
    },
}

// Get WPML language code
function getWPMLLanguageCode(currentLang) {
    return LANGUAGE_MAPPING[currentLang] || "en"
}

// Get localized category ID
function getLocalizedCategoryId(categorySlug, language) {
    return CATEGORY_MAPPING[categorySlug]?.[language] || CATEGORY_MAPPING[categorySlug]?.["en"]
}

// Generate localized post URL
function getLocalizedPostUrl(originalUrl, language) {
    if (language === "en" || !language) {
        return originalUrl
    }

    // For WPML, check if URL already has language prefix
    if (originalUrl.includes(`/${language}/`)) {
        return originalUrl
    }

    // Add language prefix to WordPress URL
    try {
        const url = new URL(originalUrl)
        url.pathname = `/${language}${url.pathname}`
        return url.toString()
    } catch (error) {
        // If URL parsing fails, return original
        return originalUrl
    }
}

// Utility function to strip HTML tags
function stripHtml(html) {
    if (typeof window !== "undefined") {
        const tmp = document.createElement("div")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }
    // Server-side HTML stripping
    return html.replace(/<[^>]*>/g, "")
}

// Enhanced fetch with multiple fallback methods
async function fetchWithFallbacks(baseUrl, params, language) {
    const methods = [
        // Method 1: Standard WPML lang parameter
        () => {
            const newParams = new URLSearchParams(params)
            if (language !== "en") {
                newParams.append("lang", language)
            }
            return `${baseUrl}?${newParams.toString()}`
        },

        // Method 2: WPML language parameter
        () => {
            const newParams = new URLSearchParams(params)
            if (language !== "en") {
                newParams.append("wpml_language", language)
            }
            return `${baseUrl}?${newParams.toString()}`
        },

        // Method 3: Polylang parameter
        () => {
            const newParams = new URLSearchParams(params)
            if (language !== "en") {
                newParams.append("polylang", language)
            }
            return `${baseUrl}?${newParams.toString()}`
        },

        // Method 4: Just fetch all posts without language filter
        () => {
            return `${baseUrl}?${params.toString()}`
        },
    ]

    for (let i = 0; i < methods.length; i++) {
        try {
            const url = methods[i]()
            console.log(`Trying method ${i + 1}: ${url}`)

            const response = await fetch(url)

            if (response.ok) {
                const data = await response.json()
                console.log(`Method ${i + 1} successful, found ${data.length} posts`)

                // If we got data, return it
                if (data && data.length > 0) {
                    return data
                }
            } else {
                console.log(`Method ${i + 1} failed with status: ${response.status}`)
            }
        } catch (error) {
            console.log(`Method ${i + 1} error:`, error.message)
        }
    }

    // If all methods fail, return empty array
    console.log("All methods failed, returning empty array")
    return []
}

// Fetch posts with WPML language support
export async function fetchLocalizedPosts(options = {}) {
    const {
        language = "en",
        category = null,
        perPage = 10,
        page = 1,
        search = "",
        orderBy = "date",
        order = "desc",
    } = options

    try {
        const wpmlLang = getWPMLLanguageCode(language)
        console.log(`Fetching posts for language: ${language} (WPML: ${wpmlLang})`)

        // Build base query parameters
        const params = new URLSearchParams({
            _embed: "true",
            per_page: perPage.toString(),
            page: page.toString(),
            orderby: orderBy,
            order: order,
        })

        // Add category filter if specified
        if (category) {
            const categoryId = getLocalizedCategoryId(category, wpmlLang)
            if (categoryId) {
                params.append("categories", categoryId.toString())
                console.log(`Using category ID: ${categoryId} for ${category}`)
            }
        }

        // Add search parameter
        if (search) {
            params.append("search", search)
        }

        // Try multiple methods to fetch posts
        const posts = await fetchWithFallbacks(`${WORDPRESS_API_URL}/posts`, params, wpmlLang)

        // Process posts to ensure proper language content
        return posts.map((post) => ({
            ...post,
            link: getLocalizedPostUrl(post.link, wpmlLang),
            // Extract featured image
            featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            // Clean excerpt
            cleanExcerpt: stripHtml(post.excerpt?.rendered || ""),
            // Clean title
            cleanTitle: stripHtml(post.title?.rendered || ""),
        }))
    } catch (error) {
        console.error("Error fetching localized posts:", error)
        return []
    }
}

// Fetch case studies with WPML support
export async function fetchLocalizedCaseStudies(language = "en", perPage = 20) {
    const wpmlLang = getWPMLLanguageCode(language)
    console.log(`Fetching case studies for language: ${language} (WPML: ${wpmlLang})`)

    try {
        const params = new URLSearchParams({
            _embed: "true",
            per_page: perPage.toString(),
            categories: getLocalizedCategoryId("case-studies", wpmlLang).toString(),
        })

        // Try multiple methods to fetch case studies
        const caseStudies = await fetchWithFallbacks(`${WORDPRESS_API_URL}/posts`, params, wpmlLang)

        return caseStudies.map((caseStudy) => ({
            ...caseStudy,
            link: getLocalizedPostUrl(caseStudy.link, wpmlLang),
            featuredImage: caseStudy._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            cleanExcerpt: stripHtml(caseStudy.excerpt?.rendered || ""),
            cleanTitle: stripHtml(caseStudy.title?.rendered || ""),
        }))
    } catch (error) {
        console.error("Error fetching localized case studies:", error)
        return []
    }
}

// Get WordPress posts for specific language using Polylang/WPML
export async function getWordPressPostsByLanguage(language, postType = "posts", limit = 10) {
    const wpmlLang = getWPMLLanguageCode(language)
    console.log(`Fetching ${postType} for language: ${language} (WPML: ${wpmlLang})`)

    try {
        const params = new URLSearchParams({
            _embed: "true",
            per_page: limit.toString(),
        })

        const posts = await fetchWithFallbacks(`${WORDPRESS_API_URL}/${postType}`, params, wpmlLang)

        return posts.map((post) => ({
            id: post.id,
            title: stripHtml(post.title?.rendered || ""),
            excerpt: stripHtml(post.excerpt?.rendered || ""),
            content: post.content?.rendered || "",
            link: getLocalizedPostUrl(post.link, wpmlLang),
            date: post.date,
            featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            author: post._embedded?.author?.[0]?.name || "Unknown",
            categories: post._embedded?.["wp:term"]?.[0] || [],
        }))
    } catch (error) {
        console.error("Error fetching WordPress posts by language:", error)
        return []
    }
}

// Check if WPML is properly configured
export async function checkWPMLConfiguration() {
    try {
        console.log("Checking WPML configuration...")

        // Test both English and Hindi endpoints
        const enResponse = await fetch(`${WORDPRESS_API_URL}/posts?per_page=1&lang=en`)
        const hiResponse = await fetch(`${WORDPRESS_API_URL}/posts?per_page=1&lang=hi`)

        console.log("English endpoint status:", enResponse.status)
        console.log("Hindi endpoint status:", hiResponse.status)

        const result = {
            english: enResponse.ok,
            hindi: hiResponse.ok,
            wpmlActive: enResponse.ok && hiResponse.ok,
        }

        console.log("WPML Configuration result:", result)
        return result
    } catch (error) {
        console.error("Error checking WPML configuration:", error)
        return {
            english: false,
            hindi: false,
            wpmlActive: false,
        }
    }
}

// Debug function to test different API endpoints
export async function debugWordPressAPI(language = "hi") {
    console.log(`=== Debugging WordPress API for language: ${language} ===`)

    const testEndpoints = [
        `${WORDPRESS_API_URL}/posts?per_page=3`,
        `${WORDPRESS_API_URL}/posts?per_page=3&lang=${language}`,
        `${WORDPRESS_API_URL}/posts?per_page=3&wpml_language=${language}`,
        `${WORDPRESS_API_URL}/posts?per_page=3&polylang=${language}`,
        `${WORDPRESS_API_URL}/posts?per_page=3&categories=193`,
        `${WORDPRESS_API_URL}/posts?per_page=3&categories=193&lang=${language}`,
    ]

    for (const endpoint of testEndpoints) {
        try {
            console.log(`Testing: ${endpoint}`)
            const response = await fetch(endpoint)
            const data = await response.json()
            console.log(`Status: ${response.status}, Posts found: ${data.length}`)

            if (data.length > 0) {
                console.log(`Sample post title: ${data[0].title?.rendered}`)
                console.log(`Sample post link: ${data[0].link}`)
            }
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
        console.log("---")
    }
}
