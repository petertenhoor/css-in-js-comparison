import Link from "next/link"
import styled from "styled-components"
import Parser from "html-react-parser"

import {getPosts, getPostBySlug} from "api/posts"

import Layout from "components/Layout"
import SnippetPost from "components/SnippetPost"

const SingleBlogContainer = styled.main(({theme}) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    maxWidth: `${theme.containerWidth}px`,
    padding: `0 ${theme.gutterVertical}px`,
    margin: '0 auto'
}))

const SingleBlogExcerpt = styled.p(({theme}) => ({
    color: theme.intro,
    fontSize: `${theme.baseFontSize * 1.5}px`
}))

const SingleBlogBack = styled.a(({theme}) => ({
    margin: `${theme.gutterVertical / 2}px 0`
}))

const SingleBlogImage = styled.img(({theme}) => ({
    margin: `${theme.gutterVertical / 2}px 0`
}))

const SingleBlog = ({id, image, title, excerpt, content, posts}) => {
    return (
        <Layout metaTitle={`${title} | Pedium.com`}
                metaDescription={excerpt}>

            <SingleBlogContainer>

                {title !== '' ? (
                    <h1>
                        {title}
                    </h1>
                ) : null}

                {excerpt !== '' ? (
                    <SingleBlogExcerpt>
                        {excerpt}
                    </SingleBlogExcerpt>
                ) : null}

                <Link href={`/archive-blog`} as={`/`}>
                    <SingleBlogBack>
                        <strong>
                            Back to archive
                        </strong>
                    </SingleBlogBack>
                </Link>

                {image !== '' ? (
                    <SingleBlogImage src={image} alt={title}/>
                ) : null}

                {content !== '' ? (
                    <div>
                        {Parser(content)}
                    </div>
                ) : null}

                <div>

                    <h2>Other posts</h2>

                    {posts.map((post) => {
                        if (post.id === id) return null
                        return <SnippetPost key={`other_posts_${post.id}`} {...post}/>
                    })}

                </div>

            </SingleBlogContainer>

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