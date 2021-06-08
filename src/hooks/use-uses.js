import { useStaticQuery, graphql } from 'gatsby'

const useUses = () =>
    useStaticQuery(graphql`
        {
            airtable: allAirtable(filter: { table: { eq: "Uses" } }) {
                edges {
                    node {
                        id
                        data {
                            name
                            type
                            description
                            link
                        }
                    }
                }
            }
            deskImg: file(relativePath: { eq: "uses-desk.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            podcastImg: file(relativePath: { eq: "uses-podcast.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            programmingImg: file(relativePath: { eq: "uses-programming.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            appsImg: file(relativePath: { eq: "uses-apps.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            otherImg: file(relativePath: { eq: "uses-other.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wishImg: file(relativePath: { eq: "uses-wish.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

export default useUses
