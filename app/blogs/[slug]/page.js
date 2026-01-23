import React from 'react'
import BlogPostUI from './BlogPostUI' // Import the client component
import { POST_CONTENT } from '../../../data/blogData'
export async function generateStaticParams() {
  return Object.keys(POST_CONTENT)
    .filter(slug => slug !== "default")
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = POST_CONTENT[slug] || POST_CONTENT["default"]
  return {
    title: `${post.title} - Cognixo Blog`,
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params 
  const post = POST_CONTENT[slug] || { ...POST_CONTENT["default"], title: "Coming Soon", content: <p>This article is being written.</p> }

  return <BlogPostUI post={post} />
}