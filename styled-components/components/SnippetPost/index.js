import PropTypes from "prop-types"
import Link from "next/link"

const SnippetPost = ({slug, thumb, title, excerpt}) => {
    return (
        <article>

            <Link href={`/single-blog?slug=${slug}`} as={`/${slug}`}>

                <a>

                    {thumb !== '' ? <img src={thumb} alt={title}/> : null}

                    {title !== '' ? (
                        <h3>
                            {title}
                        </h3>
                    ) : null}

                    {excerpt !== '' ? (
                        <p>
                            {excerpt}
                        </p>
                    ) : null}

                    <span>
                        Read more
                    </span>

                </a>

            </Link>

        </article>
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