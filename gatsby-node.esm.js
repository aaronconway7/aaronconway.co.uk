const path = require(`path`)
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import readingTime from 'reading-time'

exports.onCreateNode = async ({ node, loadNodeContent, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    const { internal } = node
    const { owner, mediaType } = internal
    if (mediaType !== 'text/richtext' || owner !== 'gatsby-source-contentful') {
        return
    }
    const doc = JSON.parse(await loadNodeContent(node))
    const text = documentToPlainTextString(doc)
    const excerpt = `${text.substr(0, 100)}...`
    const result = readingTime(text)
    createNodeField({ node, name: 'readingTime', value: result })
    createNodeField({ node, name: 'excerpt', value: excerpt })
}

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
            allContentfulPost {
                edges {
                    node {
                        slug
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

    result.data.allContentfulPost.edges.forEach(({ node }) => {
        createPage({
            path: `blog/${node.slug}`,
            component: path.resolve(`./src/layouts/blog-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        })
    })
}
