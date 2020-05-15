import Link from "next/link"
import Parser from "html-react-parser"

import {getPosts, getPostBySlug} from "api/posts"

import Layout from "components/Layout"
import SnippetPost from "components/SnippetPost"

const SingleBlog = ({id, image, title, excerpt, content, posts}) => {
    return (
        <Layout metaTitle={title}
                metaDescription={excerpt}>

            {title !== '' ? (
                <h1>
                    {title}
                </h1>
            ) : null}

            {excerpt !== '' ? (
                <p>
                    {excerpt}
                </p>
            ) : null}

            {image !== '' ? (<img src={image} alt={title}/>) : null}

            {content !== '' ? (
                <div>
                    {Parser(content)}
                </div>
            ) : null}

            <Link href={`/archive-blog`} as={`/`}>
                <a>
                    Back to archive
                </a>
            </Link>

            <div>

                <h2>Other posts</h2>

                {posts.map((post) => {
                    if (post.id === id) return null
                    return <SnippetPost key={`other_posts_${post.id}`} {...post}/>
                })}

            </div>

        </Layout>
    )
}

SingleBlog.getInitialProps = async ({query: {slug}}) => {
    const responses = await Promise.all([getPosts(), getPostBySlug(slug)])
    return {
        posts: responses[0],
        ...responses[1],
    }
}

export default SingleBlog