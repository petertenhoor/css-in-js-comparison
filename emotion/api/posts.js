const posts = [
    {
        id: 1,
        slug : "emotion",
        thumb: "/static/thumbs/thumb-emotion.png",
        image: "/static/images/image-emotion.png",
        title: "Is Emotion the best CSS In JS solution?",
        excerpt: "This research was conducted by Peter ten Hoor at may 15th 2020.",
        content: "<h2>Benefits of CSS in JS</h2><p>CSS in JS solutions have the following benefits:</p><ul><li>Styling is scoped (every class will be unique).</li><li>Only the styling that is used by the rendered components will be loaded.</li><li>It is no longer CSS. Your entire front-end codebase can be written in Javascript, which (for example) allows you to share variables between client, node server and styling.</li><li>Offerts the possibility to implement theming without the need of CSS variables.</li><li>Some packages have caching which means that CSS that was used on the previous pages in your SPA will not be rerendered on the next page (client side performance improvement).</li></ul><h2>Disadvantages of CSS in JS</h2><p>CSS in JS solutions have the following disadvantages:</p><ul><li>No BEM.</li><li>Some developers do not like to mix their styles and JS. They feel like it makes your code messy.</li><li>No built in util functions like lighten, darken, rgba etc (you can use packages like polished for this)</li><li>No linting tools.</li><li>Existing SCSS / LESS mixins, placeholders and functions etc can not be used.</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec.</p>"
    },
    {
        id: 2,
        slug : "styled-components",
        thumb: "/static/thumbs/thumb-styled-components.png",
        image: "/static/images/image-styled-components.png",
        title: "Will styled components make a comeback?",
        excerpt: "This research was conducted by Peter ten Hoor at may 15th 2020.",
        content: "<h2>Benefits of CSS in JS</h2><p>CSS in JS solutions have the following benefits:</p><ul><li>Styling is scoped (every class will be unique).</li><li>Only the styling that is used by the rendered components will be loaded.</li><li>It is no longer CSS. Your entire front-end codebase can be written in Javascript, which (for example) allows you to share variables between client, node server and styling.</li><li>Offerts the possibility to implement theming without the need of CSS variables.</li><li>Some packages have caching which means that CSS that was used on the previous pages in your SPA will not be rerendered on the next page (client side performance improvement).</li></ul><h2>Disadvantages of CSS in JS</h2><p>CSS in JS solutions have the following disadvantages:</p><ul><li>No BEM.</li><li>Some developers do not like to mix their styles and JS. They feel like it makes your code messy.</li><li>No built in util functions like lighten, darken, rgba etc (you can use packages like polished for this)</li><li>No linting tools.</li><li>Existing SCSS / LESS mixins, placeholders and functions etc can not be used.</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec.</p>"
    },
    {
        id: 3,
        slug: "other-solutions",
        thumb: "/static/thumbs/thumb-other-solutions.png",
        image: "/static/images/image-other-solutions.png",
        title: "What about JSS, Fela and Styletron?",
        excerpt: "This research was conducted by Peter ten Hoor at may 15th 2020.",
        content: "<h2>Benefits of CSS in JS</h2><p>CSS in JS solutions have the following benefits:</p><ul><li>Styling is scoped (every class will be unique).</li><li>Only the styling that is used by the rendered components will be loaded.</li><li>It is no longer CSS. Your entire front-end codebase can be written in Javascript, which (for example) allows you to share variables between client, node server and styling.</li><li>Offerts the possibility to implement theming without the need of CSS variables.</li><li>Some packages have caching which means that CSS that was used on the previous pages in your SPA will not be rerendered on the next page (client side performance improvement).</li></ul><h2>Disadvantages of CSS in JS</h2><p>CSS in JS solutions have the following disadvantages:</p><ul><li>No BEM.</li><li>Some developers do not like to mix their styles and JS. They feel like it makes your code messy.</li><li>No built in util functions like lighten, darken, rgba etc (you can use packages like polished for this)</li><li>No linting tools.</li><li>Existing SCSS / LESS mixins, placeholders and functions etc can not be used.</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec.</p>"
    }
]

/**
 * Get array of posts
 * @return {Promise}
 */
const getPosts = async() => posts

/**
 * Get post object by slug
 * @param slug {string}
 * @return {Promise<*>}
 */
const getPostBySlug = async(slug = '') => {
    const match = posts.findIndex((page) => page.slug === slug)
    return match > -1 ? posts[match] : false
}

export {getPosts, getPostBySlug}