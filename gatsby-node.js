/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allAirtable(
                filter: {
                    table: { eq: "Projects" }
                    data: { show: { eq: true } }
                }
            ) {
                edges {
                    node {
                        data {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allAirtable.edges.forEach(({ node }) => {
        createPage({
            path: `projects/${node.data.slug}`,
            component: path.resolve(`./src/layouts/project-page.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.data.slug,
            },
        })
    })
}
