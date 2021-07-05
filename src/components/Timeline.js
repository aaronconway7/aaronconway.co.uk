import React from 'react'
import styled from 'styled-components'

import LineThroughLink from './LineThroughLink'

const data = [
    {
        title: `💊 Thriva`,
        link: `https://thriva.co`,
        sub: `Frontend Software Engineer`,
        location: `London, 🇬🇧`,
        date: `Jul 2021 - Present`,
    },
    {
        title: `⚽ Arcspire`,
        link: `https://arcspire.io`,
        sub: `Frontend Developer`,
        location: `London, 🇬🇧`,
        date: `Mar 2020 - Jul 2021`,
    },
    {
        title: `🎙️ The Third Wheel`,
        link: `https://thethirdwheel.fm`,
        sub: `Host`,
        location: `London, 🇬🇧`,
        date: `Sep 2019 - Present`,
    },
    {
        title: `💸 Finvoice`,
        link: `https://finvoice.co`,
        sub: `Frontend Software Engineer`,
        location: `San Francisco, 🇺🇸`,
        date: `Jul 2018 - Oct 2019`,
    },
    {
        title: `🌉 SVIP`,
        link: `https://siliconvalleyinternship.com/`,
        sub: `Class of 2018-2019`,
        location: `San Francisco, 🇺🇸`,
        date: `Sep 2018 - Aug 2019`,
    },
    {
        title: `📱 Fanbytes`,
        link: `https://fanbytes.co.uk/`,
        sub: `Frontend Developer & Designer`,
        location: `London, 🇬🇧`,
        date: `Aug 2017 - Sep 2017`,
    },
    {
        title: `🎓 University of Warwick`,
        link: `https://warwick.ac.uk/`,
        sub: `Master of Engineering (MEng), Computer Science`,
        location: `Coventry, 🇬🇧`,
        date: `Sep 2014 - Jun 2018`,
    },
    {
        title: `🎒 The Campion School`,
        link: `https://thecampionschool.org.uk/`,
        location: `Essex, 🇬🇧`,
        date: `Sep 2007 - Jul 2014`,
    },
]

const Timeline = ({ offset }) => (
    <StyledTimeline
        className={`grid gap-y-4 gap-x-20 md:gap-x-32 items-center transition-transform ease-in-out duration-300`}
        offset={offset}
    >
        {data.map(event => (
            <div className={`relative text-center self-end`}>
                <h3>
                    <LineThroughLink href={event.link} target={`_blank`}>
                        {event.title}
                    </LineThroughLink>
                </h3>
                {event.sub && (
                    <p className={`text-sm italic opacity-75`}>{event.sub}</p>
                )}
                <div
                    className={`marker absolute left-0 bottom-0 -mb-6 rounded-full w-3 h-3 bg-white`}
                />
            </div>
        ))}
        <div
            className={`h-1 bg-white bg-opacity-25 rounded-full col-span-full`}
        />
        {data.map(event => (
            <div
                className={`text-center self-start text-sm space-y-1 opacity-50`}
            >
                <p>{event.date}</p>
                <p>{event.location}</p>
            </div>
        ))}
    </StyledTimeline>
)

export default Timeline

const StyledTimeline = styled.div`
    grid-template-columns: repeat(${data.length}, max-content);
    grid-template-rows: 1fr max-content 1fr;
    width: 80vw;
    transform: translateX(${props => props.offset}px);

    .marker {
        margin-left: 50%;
        transform: translateX(-50%);
    }
`
