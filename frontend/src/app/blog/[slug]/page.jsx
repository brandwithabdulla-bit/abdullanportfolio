import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogData';
import '../../../../public/assets/css/blog-article.css';

// Generating static params for SSR builds
export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

// Dynamic per-post SEO metadata
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = blogs.find((b) => b.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    // Strip HTML tags to get a plain text excerpt for description
    const plainText = post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const excerpt = plainText.slice(0, 155) + '…';

    return {
        title: `${post.title} | Performance Marketer in Kerala`,
        description: excerpt,
        keywords: [
            'performance marketer in kerala',
            'digital marketer in kerala',
            post.title.toLowerCase(),
        ],
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | Muhammed Abdulla`,
            description: excerpt,
            url: `/blog/${post.slug}`,
            type: 'article',
            authors: ['Muhammed Abdulla'],
            images: [
                {
                    url: post.image,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            title: `${post.title} | Muhammed Abdulla`,
            description: excerpt,
            images: [post.image],
        },
    };
}



export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    
    // Find the current blog post by matching the URL slug
    const post = blogs.find((b) => b.slug === slug);
    
    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            
            <main className="blog-article-wrap fade-in-up">
                <Link href="/blog" className="blog-back-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Articles
                </Link>

                <div className="blog-article-header">
                    <h1 className="blog-article-title">{post.title}</h1>
                    <div className="blog-article-meta">
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> 
                            By {post.author}
                        </span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 
                            {post.date}
                        </span>
                    </div>
                </div>

                <img src={post.image} alt={post.title} className="blog-article-hero-img" />

                <article 
                    className="blog-article-content"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />
            </main>

            <Footer />
        </>
    );
}
