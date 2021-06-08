import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import useFriends from '../hooks/use-friends'

const StyledFriends = styled.div`
    ${tw`grid grid-cols-2 md:grid-cols-3`}

    .friend {
        ${tw`relative bg-black overflow-hidden`}
        ${({ theme }) =>
            theme.darkMode ? tw`bg-black` : tw`bg-white`}

        .img {
            ${tw`object-cover object-center w-full`}
            height: 50vw;

            @media (min-width: 768px) {
                height: 20vw;
            }
        }

        .name {
            ${tw`absolute bottom-0 left-0 mb-6 md:mb-12 ml-6 md:ml-12 md:text-lg`}
        }
    }
`

const Friends = () => {
    const {
        allAirtable: { edges: friends },
    } = useFriends()

    return (
        <StyledFriends id={`friends`}>
            {friends.map(({ node: { data: friend } }) => (
                <motion.a
                    href={friend.link}
                    target={`_blank`}
                    className={`friend`}
                    initial={`rest`}
                    whileHover={`hover`}
                    key={friend.name}
                    rel={`noopener`}
                >
                    <motion.div
                        variants={{
                            rest: {
                                scale: 1,
                                opacity: 1,
                            },
                            hover: {
                                scale: 1.2,
                                opacity: 0.25,
                            },
                        }}
                        className={`img-wrapper`}
                    >
                        <Img
                            className={`img`}
                            fluid={
                                friend.duo.localFiles[0].childImageSharp.fluid
                            }
                            alt={friend.name}
                        />
                    </motion.div>
                    <motion.span
                        className={`name`}
                        variants={{
                            rest: {
                                x: -50,
                                opacity: 0,
                            },
                            hover: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                    >
                        {friend.name}
                    </motion.span>
                </motion.a>
            ))}
        </StyledFriends>
    )
}

export default Friends
