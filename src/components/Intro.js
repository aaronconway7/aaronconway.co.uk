import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

import Emoji from './Emoji'
import HomeSectionLayout from '../layouts/homeSection'
import Timeline from './Timeline'

const Intro = () => {
    const [timelineOffset, setTimelineOffset] = useState(0)

    return (
        <StyledIntro id={`intro`}>
            <HomeSectionLayout>
                <h1 className={`title`}>
                    I'm Aaron <Emoji emoji={`👋`} label={`Wave`} />
                </h1>
                <p className={`text`}>
                    I’m a <span className={`red`}>developer</span> who can
                    design. A <span className={`red`}>designer</span> who can
                    develop. One or the other!
                </p>
                <div
                    className={`timeline-container relative mt-8 md:mt-16 pl-12 overflow-x-hidden`}
                >
                    <Timeline offset={timelineOffset} />
                    <div
                        className={`timeline-fade absolute top-0 left-0 w-full h-full`}
                    />
                    <div
                        className={`flex space-x-2 absolute right-0 top-0 mt-10`}
                    >
                        <button
                            className={`rounded border-2 p-1 text-3xl opacity-50 hover:bg-brand-red hover:opacity-100`}
                            onClick={() =>
                                setTimelineOffset(prev => prev + 100)
                            }
                            disabled={timelineOffset === 0}
                        >
                            <BsArrowLeftShort />
                        </button>
                        <button
                            className={`rounded border-2 p-1 text-3xl opacity-50 hover:bg-brand-red hover:opacity-100`}
                            onClick={() =>
                                setTimelineOffset(prev => prev - 100)
                            }
                        >
                            <BsArrowRightShort />
                        </button>
                    </div>
                </div>
            </HomeSectionLayout>
        </StyledIntro>
    )
}

export default Intro

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

    .timeline-fade {
        background: linear-gradient(
            90deg,
            rgba(14, 14, 14, 1) 0%,
            rgba(0, 0, 0, 0) 5%,
            rgba(0, 0, 0, 0) 60%,
            rgba(14, 14, 14, 1) 95%
        );
    }
`
