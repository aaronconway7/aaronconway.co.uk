import React from 'react'
import Img from 'gatsby-image'

import LineThroughLink from '../components/LineThroughLink'
import Layout from '../layouts/homeSection'
import useUses from '../hooks/use-uses'

const types = [
    { name: `Desk Setup`, img: `deskImg` },
    { name: `Apps`, img: `appsImg` },
    { name: `Editor & Terminal`, img: `programmingImg` },
    { name: `Podcast`, img: `podcastImg` },
    { name: `Other`, img: `otherImg` },
    { name: `Wishlist`, img: `wishImg` },
]

const Uses = () => {
    const data = useUses()

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
                            <ul
                                className={`space-y-4 md:space-y-8 text-xl md:text-3xl`}
                            >
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
