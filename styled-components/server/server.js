import express from "express"
import next from "next"
import compression from "compression"
import cors from "cors"
import helmet from "helmet"
import favicon from "serve-favicon"
import {config} from "dotenv"
import {join} from "path"

import SsrCacheModel from "./models/SsrCacheModel"

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()

//read .env file
config({path: __dirname + '/./../../.env'})

const SsrCacheModelInstance = new SsrCacheModel()

//add generic middlewares
server.use(compression({threshold: 0}))
server.use(cors())
server.use(helmet())

/**
 * Redirect all pages to non trailing slash pages
 */
server.use((req, res, next) => {
    const test = /\?[^]*\//.test(req.url)
    if (req.url.substr(-1) === '/' && req.url.length > 1 && !test) res.redirect(301, req.url.slice(0, -1))
    else next()
})

//serve favicon
server.use(favicon(join(__dirname, '..', 'public', 'static', 'favicons', 'favicon.ico')))

app.prepare().then(() => {

    //handle static next.js assets with their handler
    server.get('/static/*', async (req, res) => handle(req, res))
    server.get('/_next/*', async (req, res) => handle(req, res))

    //handle home route
    server.get(`/`, async (req, res) => {
        return await SsrCacheModelInstance.renderAndCacheDynamic(app, req, res, '/archive-blog', {}, !dev)
    })

    //handle page routes
    server.get('/*', async (req, res) => {
        return await SsrCacheModelInstance.renderAndCacheDynamic(app, req, res, '/single-blog', {slug: req.params[0]}, !dev)
    })
})

server.listen(process.env.PORT_STYLED_COMPONENTS, '127.0.0.1', async (err) => {
    if (err) throw err
    await SsrCacheModelInstance.reset()
    console.log(`> Server is now running on http://127.0.0.1:${process.env.PORT_STYLED_COMPONENTS}`)
})