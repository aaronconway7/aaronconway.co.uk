const postQuery = `{
    posts: allContentfulPost(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
        }
      }
    }
}`

const flatten = arr =>
    arr.map(({ node: { ...rest } }) => ({
        ...rest,
    }))

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: `Blog`,
    },
]

module.exports = queries
