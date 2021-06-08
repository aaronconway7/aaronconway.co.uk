import { useStaticQuery, graphql } from 'gatsby'

const useProjects = () =>
    useStaticQuery(graphql`
        {
            allAirtable(
                filter: {
                    table: { eq: "Projects" }
                    data: { show: { eq: true } }
                }
                sort: { fields: [data___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        data {
                            title
                            slug
                            thumbnail {
                                localFiles {
                                    childImageSharp {
                                        fluid(maxWidth: 1000) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

export default useProjects
