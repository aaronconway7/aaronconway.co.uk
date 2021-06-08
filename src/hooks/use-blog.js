import { useStaticQuery, graphql } from 'gatsby'

const useBlog = () =>
    useStaticQuery(graphql`
        {
            posts: allContentfulPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                        slug
                        title
                        date
                        featuredImage {
                            fluid(maxWidth: 1000) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        content {
                            fields {
                                excerpt
                                readingTime {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

export default useBlog
