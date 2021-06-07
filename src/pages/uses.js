import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import LineThroughLink from '../components/LineThroughLink'
import Layout from '../layouts/homeSection'

const types = [
    `Desk Setup`,
    `Apps`,
    `Editor & Terminal`,
    `Podcast`,
    `Other`,
    `Wishlist`,
]

const Uses = () => {
    const {
        allAirtable: { edges: uses },
    } = useStaticQuery(graphql`
        {
            allAirtable(filter: { table: { eq: "Uses" } }) {
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
                    const typeUses = uses.filter(u => u.node.data.type === t)
                    return (
                        <div className={`grid`}>
                            <h2 className={`title`}>{t}</h2>
                            {/* <img src={``} alt={``} /> */}
                            <ul className={`text space-y-8`}>
                                {typeUses.map(({ node: u }) => (
                                    <li key={u.id}>
                                        <LineThroughLink
                                            href={u.data.link}
                                            className={`red`}
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
