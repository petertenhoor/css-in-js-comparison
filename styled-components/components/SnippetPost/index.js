import PropTypes from "prop-types"
import Link from "next/link"
import styled from "styled-components"

const SnippetPostContainer = styled.article(({theme}) => ({
    display: 'flex',
    width: '100%',
    position: 'relative',
    marginBottom: `${theme.gutterVertical}px`,
}))

const SnippetPostContainerLink = styled.a({
    display: 'flex',
    width: '100%',
    position: 'relative',
})

const SnippetPostMeta = styled.div(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: `${theme.gutterVertical}px`,
    backgroundColor: theme.backgroundAccent
}))

const SnippetPostTitle = styled.h3(({theme}) => ({
    display: 'flex',
    margin: 0,
    color: theme.text
}))

const SnippetPostExcerpt = styled.p(({theme}) => ({
    display: 'flex',
    color: theme.text,
    marginTop: `${theme.gutterVertical / 2}px`
}))

const SnippetPostCta = styled.strong(({theme}) => ({
    marginTop: `${theme.gutterVertical / 2}px`
}))

const SnippetPost = ({slug, thumb, title, excerpt}) => {
    return (
        <SnippetPostContainer>

            <Link href={`/single-blog?slug=${slug}`} as={`/${slug}`}>

                <SnippetPostContainerLink>

                    {thumb !== '' ? <img src={thumb} alt={title}/> : null}

                    <SnippetPostMeta>

                        {title !== '' ? (
                            <SnippetPostTitle>
                                {title}
                            </SnippetPostTitle>
                        ) : null}

                        {excerpt !== '' ? (
                            <SnippetPostExcerpt>
                                {excerpt}
                            </SnippetPostExcerpt>
                        ) : null}

                        <SnippetPostCta>
                            Read more
                        </SnippetPostCta>

                    </SnippetPostMeta>

                </SnippetPostContainerLink>

            </Link>

        </SnippetPostContainer>
    )
}

SnippetPost.defaultProps = {
    image: '',
    thumb: '',
    title: '',
    excerpt: '',
    content: '',
}

SnippetPost.propTypes = {
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    thumb: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string
}

export default SnippetPost