const siteMetadata = {
    title: `Gatsby App`,
    shortName: `gatsby`,
    description: `My Starter Template for a Gatsby based app.`,
    author: `Aaron`,
    twitter: `@aaronconway7`,
    siteUrl: `https://example.com/`,
    backgroundColor: `#663399`,
    themeColor: `#663399`,
    favicon: `src/assets/img/favicon.png`,
    socialImage: `src/assets/img/leo.jpg`,
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
                trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
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
