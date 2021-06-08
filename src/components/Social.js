import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
    FiTwitter,
    FiFacebook,
    FiInstagram,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi'
import { FaSpotify } from 'react-icons/fa'
import { motion } from 'framer-motion'

import Emoji from './Emoji'
import LineThroughLink from './LineThroughLink'
import HomeSectionLayout from '../layouts/homeSection'

const socials = [
    {
        name: `twitter`,
        icon: FiTwitter,
        color: `#00acee`,
        link: `https://twitter.com/aaronconway7`,
    },
    {
        name: `facebook`,
        icon: FiFacebook,
        color: `#3b5998`,
        link: `https://facebook.com/aconway7`,
    },
    {
        name: `instagram`,
        icon: FiInstagram,
        color: `#C13584`,
        link: `https://instagram.com/aaronconway7`,
    },
    {
        name: `github`,
        icon: FiGithub,
        color: `#ffffff`,
        link: `https://github.com/aaronconway7`,
    },
    {
        name: `linkedin`,
        icon: FiLinkedin,
        color: `#0e76a8`,
        link: `https://linkedin.com/in/aaronconway7`,
    },
    {
        name: `spotify`,
        icon: FaSpotify,
        color: `#1db954`,
        link: `https://open.spotify.com/user/aaronconway7?si=wKHrieBVTWKHOzO2tZqFeQ`,
    },
]

const Social = () => (
    <StyledSocial id={`social`}>
        <div className={`social-links`}>
            {socials.map(social => {
                const Icon = social.icon
                return (
                    <motion.a
                        className={`social`}
                        href={social.link}
                        target={`_blank`}
                        whileHover={{ opacity: 1, color: social.color }}
                        key={social.name}
                        rel={`noopener`}
                        aria-label={social.name}
                    >
                        <Icon className={`icon`} />
                    </motion.a>
                )
            })}
        </div>
        <HomeSectionLayout>
            <h1 className={`title`}>
                Get in touch <Emoji emoji={`💬`} label={`Message`} />
            </h1>
            <p className={`text`}>
                If you want to get in touch you can email me at{' '}
                <LineThroughLink
                    href={`emailto:hello@aaronconway.co.uk`}
                    target={`_blank`}
                    className={`red email`}
                >
                    hello@aaronconway.co.uk
                </LineThroughLink>
                .
            </p>
            <p className={`text`}>
                You can also find me on the line via{' '}
                <LineThroughLink
                    href={
                        socials.find(social => social.name === `twitter`).link
                    }
                    target={`_blank`}
                    className={`red`}
                    color={
                        socials.find(social => social.name === `twitter`).color
                    }
                >
                    twitter
                </LineThroughLink>
                ,{' '}
                <LineThroughLink
                    href={
                        socials.find(social => social.name === `instagram`).link
                    }
                    target={`_blank`}
                    className={`red`}
                    color={
                        socials.find(social => social.name === `instagram`)
                            .color
                    }
                >
                    insta
                </LineThroughLink>{' '}
                and{' '}
                <LineThroughLink
                    href={
                        socials.find(social => social.name === `linkedin`).link
                    }
                    target={`_blank`}
                    className={`red`}
                    color={
                        socials.find(social => social.name === `linkedin`).color
                    }
                >
                    linkedin
                </LineThroughLink>
                .
            </p>
        </HomeSectionLayout>
    </StyledSocial>
)

export default Social

const StyledSocial = styled.section`
    ${tw`relative`}
    background-color: ${({ theme }) =>
        theme.darkMode ? `rgba(255, 255, 255, 0.025)` : `rgba(0, 0, 0, 0.025)`};
    
    .social-links {
        ${tw`absolute right-0 bottom-0 mb-8 mr-8 flex`}

        .social {
            ${tw`ml-3 opacity-25 text-xl`}
        }
    }

    .text {
        &:not(:first-of-type) {
            ${tw`mt-12`}
        }

        .email {
            ${tw`text-2xl md:text-5xl`};
        }
    }
`
