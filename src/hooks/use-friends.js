import { useStaticQuery, graphql } from 'gatsby'

const useFriends = () =>
    useStaticQuery(graphql`
        {
            allAirtable(
                filter: {
                    table: { eq: "Friends" }
                    data: { friend: { eq: true } }
                }
                sort: { fields: [data___name] }
            ) {
                edges {
                    node {
                        id
                        data {
                            name
                            link
                            duo {
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

export default useFriends
