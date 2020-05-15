import PropTypes from "prop-types"
import NextHead from "next/head"

const Head = ({metaTitle, metaDescription}) => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, maximum-scale=2"/>
        <title>{metaTitle !== '' ? metaTitle : 'Untitled'}</title>
        {metaDescription ? (<meta name="description" content={metaDescription}/>) : null}
    </NextHead>
)

Head.defaultProps = {
    metaTitle: '',
    metaDescription: '',
}

/**
 * Define propTypes
 */
Head.propTypes = {
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string
}

/**
 * Export component
 */
export default Head