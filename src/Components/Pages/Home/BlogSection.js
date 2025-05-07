"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BlogSection() {
  // State for blog posts
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        // Real WordPress API call
        const response = await fetch("https://www.pranaair.com/wp-json/wp/v2/posts?_embed&per_page=2")
        const data = await response.json()

        // Transform WordPress data to match our blog post format
        const formattedPosts = data.map((post) => {
          // Get the featured image URL or use a placeholder
          const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]
          const imageUrl = featuredMedia?.source_url || "/placeholder.svg"

          // Get the first category
          const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog"
          const categorySlug = post._embedded?.["wp:term"]?.[0]?.[0]?.slug || "blog"

          // Format the date
          const date = new Date(post.date)
          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

          return {
            id: post.id.toString(),
            title: post.title.rendered,
            slug: post.slug,
            category: category,
            categorySlug: categorySlug,
            imageUrl: imageUrl,
            imageAlt: post.title.rendered,
            date: formattedDate,
          }
        })

        setBlogPosts(formattedPosts)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        // Set fallback data in case the API fails
        setBlogPosts([
          {
            id: "1",
            title: "Understanding Air Quality in India: Challenges and Solutions",
            slug: "breathing-air-pollution-is-like-smoking",
            category: "Air Quality",
            categorySlug: "air-quality",
            imageUrl:
              "https://www.pranaair.com/wp-content/uploads/2025/04/breathing-air-pollution-is-like-smoking-1306x870.webp",
            imageAlt: "Air Quality in India",
            date: "11/04/2025",
          },
          {
            id: "2",
            title: "The Hidden Dangers of PM2.5: How Small Particles Cause Big Health Problems",
            slug: "prana-air-devices-helped-study",
            category: "Health",
            categorySlug: "health",
            imageUrl:
              "https://www.pranaair.com/wp-content/uploads/2025/04/prana-air-device-helped-study-of-heart-defects-1306x870.webp",
            imageAlt: "PM2.5 Effects on Health",
            date: "09/04/2025",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])


  // Return JSX
  return <section className="blog-sec">
    <div className="container">
      <div className="blog-content">
        <div className="articles-list">
          {loading ? (
            <div className="loading">Loading blog posts...</div>
          ) : (
            blogPosts.map((post) => (
              <div key={post.id} className="project-odd">
                <div className="post-thumbnail-wrap">
                  <Link href={`https://www.pranaair.com/blog/${post.slug}/`}>
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.imageAlt}
                      width={500}
                      height={300}
                      className="blog-image"
                    />
                  </Link>
                </div>
                <div className="post-entry-content">
                  <div className="entry-meta">
                    <Link
                      href={`https://www.pranaair.com/blog/category/${post.categorySlug}/`}
                      className="category-link"
                    >
                      {post.category}
                    </Link>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h3 className="entry-title">
                    <Link href={`https://www.pranaair.com/blog/${post.slug}/`}>{post.title}</Link>
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="blog-title">
          <h2>
            Air Quality <span className="text-highlight">Blogs</span>
          </h2>
          <Link href="https://www.pranaair.com/blog/" className="blogs-button">
            See More Blogs
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2024/07/parameters-icon.png"
              alt="arrow icon"
              width={10}
              height={10}
              className="button-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
}