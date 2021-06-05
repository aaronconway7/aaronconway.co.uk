import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import Emoji from './Emoji'
import LineThroughLink from './LineThroughLink'
import HomeSectionLayout from '../layouts/homeSection'

const StyledIntro = styled.section`
    .more-info {
        ${tw`mt-8 md:mt-16 grid md:grid-cols-3 gap-4 text-lg md:text-xl`}

        ul {
            ${tw`leading-loose md:mt-2`}

            li {
                ${tw`md:text-lg`}
                .item-text {
                    ${tw`ml-1 mr-1 opacity-50`}
                }
            }
        }
    }
`

const moreInfo = [
    {
        title: `Where`,
        items: [
            {
                preEmoji: {
                    emoji: `🏠`,
                    label: `Home`,
                },
                text: `Rainham`,
                postEmoji: {
                    emoji: `🇬🇧`,
                    label: `UK`,
                },
            },
            {
                preEmoji: {
                    emoji: `🏢`,
                    label: `Office`,
                },
                text: `London`,
                postEmoji: {
                    emoji: `🇬🇧`,
                    label: `UK`,
                },
            },
        ],
    },
    {
        title: `Now`,
        items: [
            {
                preEmoji: {
                    emoji: `⚽`,
                    label: `Football`,
                },
                text: `Arcspire`,
                link: `https://arcspire.io`,
            },
            {
                preEmoji: {
                    emoji: `🎙️`,
                    label: `Microphone`,
                },
                text: `The Third Wheel`,
                link: `https://thethirdwheel.fm`,
            },
        ],
    },
    {
        title: `Previous`,
        items: [
            {
                preEmoji: {
                    emoji: `🇺🇸`,
                    label: `USA`,
                },
                text: `Finvoice`,
                link: `https://finvoice.co`,
            },
            {
                preEmoji: {
                    emoji: `🌉`,
                    label: `Golden Gate Bridge`,
                },
                text: `SVIP`,
                link: `https://siliconvalleyinternship.com/`,
            },
            {
                preEmoji: {
                    emoji: `🎓`,
                    label: `Graduation Hat`,
                },
                text: `The University of Warwick`,
                link: `https://warwick.ac.uk/`,
            },
        ],
    },
]

const Intro = () => (
    <StyledIntro id={`intro`}>
        <HomeSectionLayout>
            <h1 className={`title`}>
                I'm Aaron <Emoji emoji={`👋`} label={`Wave`} />
            </h1>
            <p className={`text`}>
                I’m a <span className={`red`}>developer</span> who can design. A{' '}
                <span className={`red`}>designer</span> who can develop. One or
                the other!
            </p>
            <div className={`more-info`}>
                {moreInfo.map(info => (
                    <div className={`info`} key={info.title}>
                        <h2 className={`info-title`}>{info.title}</h2>
                        <ul>
                            {info.items.map(item => (
                                <li key={item.text}>
                                    {item.preEmoji && (
                                        <Emoji
                                            emoji={item.preEmoji.emoji}
                                            label={item.preEmoji.label}
                                        />
                                    )}
                                    <span className={`item-text`}>
                                        {item.link ? (
                                            <LineThroughLink
                                                href={item.link}
                                                target={`_blank`}
                                            >
                                                {item.text}
                                            </LineThroughLink>
                                        ) : (
                                            item.text
                                        )}
                                    </span>
                                    {item.postEmoji && (
                                        <Emoji
                                            emoji={item.postEmoji.emoji}
                                            label={item.postEmoji.label}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </HomeSectionLayout>
    </StyledIntro>
)

export default Intro
