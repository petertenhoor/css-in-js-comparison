import {getPosts} from "api/posts"

import Layout from "components/Layout"
import SnippetPost from "components/SnippetPost"

const ArchiveBlog = ({posts = []}) => {

    return (
        <Layout metaTitle={`Blog - Pedium.com`}>

            <h1>Latest posts</h1>

            {posts.map((post) => <SnippetPost key={`latest_posts_${post.id}`} {...post}/>)}

        </Layout>
    )
}

ArchiveBlog.getInitialProps = async () => {
    return {
        posts: await getPosts()
    }
}

export default ArchiveBlog