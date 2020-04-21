const postQuery = `{
    posts: allContentfulPost(sort: {fields: date, order: ASC}) {
        edges {
            node {
                slug
                title
                date
                content {
                    fields {
                        excerpt
                        readingTime {
                            text
                        }
                        text
                    }
                }
            }
        }
    }
}`

const flatten = arr =>
    arr.map(({ node: { ...rest } }) => ({
        ...rest,
    }))

const settings = {
    hitsPerPage: 5,
    searchableAttributes: [`title`, `content.fields.text`],
}

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: `Blog`,
        settings,
    },
]

module.exports = queries
