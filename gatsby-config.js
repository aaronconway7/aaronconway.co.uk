require('dotenv').config()
const queries = require('./src/utils/algolia')

const siteMetadata = {
    title: `Aaron Conway | Developer, Designer, one or the other.`,
    shortName: `Aaron Conway`,
    description: `Portfolio Website for Aaron Conway.`,
    author: `Aaron`,
    twitter: `@aaronconway7`,
    siteUrl: `https://aaronconway.co.uk/`,
    backgroundColor: `#0e0e0e`,
    themeColor: `#fa4b4a`,
    favicon: `src/assets/img/favicon.png`,
}

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/img`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteMetadata.title.replace(/\s+/g, '-').toLowerCase(),
                short_name: siteMetadata.shortName,
                start_url: `/`,
                background_color: siteMetadata.backgroundColor,
                theme_color: siteMetadata.themeColor,
                display: `minimal-ui`,
                icon: siteMetadata.favicon, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
                tables: [
                    {
                        baseId: `appBUcuPrHrxslrh2`,
                        tableName: `Projects`,
                        tableLinks: [`team`],
                        mapping: {
                            thumbnail: `fileNode`,
                            artwork: `fileNode`,
                            screenshots: `fileNode`,
                            mobile: `fileNode`,
                        },
                    },
                    {
                        baseId: `appBUcuPrHrxslrh2`,
                        tableName: `Friends`,
                        mapping: { sole: `fileNode`, duo: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
                    },
                    {
                        baseId: `appBUcuPrHrxslrh2`,
                        tableName: `Uses`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `l62l9fcffwik`,
                // Learn about environment variables: https://gatsby.app/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: siteMetadata.themeColor,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 1000, // default: 1000
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
                displayName: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-87682044-1',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: siteMetadata.siteUrl,
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                purgeOnly: [`/tailwind.css`], // Purge only these files/folders
            },
        },
        `gatsby-plugin-robots-txt`,
    ],
}
