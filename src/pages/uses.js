import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import LineThroughLink from '../components/LineThroughLink'
import Layout from '../layouts/homeSection'

const types = [
    { name: `Desk Setup`, img: `deskImg` },
    { name: `Apps` },
    { name: `Editor & Terminal`, img: `programmingImg` },
    { name: `Podcast`, img: `podcastImg` },
    { name: `Other` },
    { name: `Wishlist` },
]

const Uses = () => {
    const data = useStaticQuery(graphql`
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
        }
    `)

    return (
        <Layout>
            <h1 className={`title`}>/Uses</h1>
            <p className={`text mb-12`}>
                If you're interested, below is a list of a bunch of stuff I use
                (and links to all of it!) - Inspired by{' '}
                <LineThroughLink
                    href={`https://wesbos.com/`}
                    target={`_blank`}
                    className={`text-yellow-500`}
                >
                    Wes Bos
                </LineThroughLink>{' '}
                and his{' '}
                <LineThroughLink
                    href={`https://uses.tech/`}
                    target={`_blank`}
                    className={`text-blue-800`}
                >
                    uses.tech
                </LineThroughLink>{' '}
                site where you can see what hundreds of other people use!
            </p>
            <div className={`grid gap-24`}>
                {types.map(t => {
                    const typeUses = data.airtable.edges.filter(
                        u => u.node.data.type === t.name
                    )
                    return (
                        <div className={`grid gap-1`}>
                            <h2 className={`title`}>{t.name}</h2>
                            <Img
                                fluid={data[t.img]?.childImageSharp.fluid}
                                alt={`${t.name} Image`}
                                className={`shadow mb-4`}
                            />
                            <ul className={`space-y-8 text-3xl`}>
                                {typeUses.map(({ node: u }) => (
                                    <li key={u.id}>
                                        <LineThroughLink
                                            href={u.data.link}
                                            className={`red text-brand-red font-bold`}
                                            target={`_blank`}
                                        >
                                            {u.data.name}
                                        </LineThroughLink>{' '}
                                        - {u.data.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Uses
