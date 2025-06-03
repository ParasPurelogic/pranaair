"use client"
import { useState, useEffect, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { fetchLocalizedPosts, fetchLocalizedCaseStudies, checkWPMLConfiguration } from "../utils/wordpress-api"

// Custom hook for WordPress content with language support
export function useWordPressContent(contentType = "posts", options = {}) {
    const { i18n } = useTranslation()
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchContent = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            let data = []

            if (contentType === "case-studies") {
                data = await fetchLocalizedCaseStudies(i18n.language, options.perPage || 10)
            } else {
                data = await fetchLocalizedPosts({
                    language: i18n.language,
                    ...options,
                })
            }

            setContent(data)
        } catch (err) {
            console.error(`Error fetching ${contentType}:`, err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [i18n.language, contentType, JSON.stringify(options)])

    useEffect(() => {
        fetchContent()
    }, [fetchContent])

    return { content, loading, error, refetch: fetchContent }
}

// Hook to check WPML configuration
export function useWPMLStatus() {
    const [status, setStatus] = useState({
        english: false,
        hindi: false,
        wpmlActive: false,
        loading: true,
    })

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const result = await checkWPMLConfiguration()
                setStatus({ ...result, loading: false })
            } catch (error) {
                console.error("Error checking WPML status:", error)
                setStatus({
                    english: false,
                    hindi: false,
                    wpmlActive: false,
                    loading: false,
                })
            }
        }

        checkStatus()
    }, [])

    return status
}
