import styled from "styled-components"

import {getPosts} from "api/posts"

import Layout from "components/Layout"
import SnippetPost from "components/SnippetPost"

const BlogArchiveContainer = styled.main(({theme}) => ({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    maxWidth: `${theme.containerWidth}px`,
    padding: `0 ${theme.gutterVertical}px`,
    margin: '0 auto'
}))

const ArchiveBlog = ({posts = []}) => {

    return (
        <Layout metaTitle={`Blog | Pedium.com`}>

            <BlogArchiveContainer>

                <h1>Latest posts</h1>

                {posts.map((post) => <SnippetPost key={`latest_posts_${post.id}`} {...post}/>)}

            </BlogArchiveContainer>

        </Layout>
    )
}

ArchiveBlog.getInitialProps = async () => {
    return {
        posts: await getPosts()
    }
}

export default ArchiveBlog