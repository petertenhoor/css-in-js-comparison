import PropTypes from "prop-types"

import Head from "../Head"

const Layout = ({children, metaTitle, metaDescription}) => (
    <>
        <Head metaTitle={metaTitle} metaDescription={metaDescription}/>
        {children}
    </>
)

Layout.defaultProps = {
    metaTitle: '',
    metaDescription: ''
}

/**
 * Define propTypes
 */
Layout.propTypes = {
    children: PropTypes.node,
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string
}

/**
 * Export component
 */
export default Layout