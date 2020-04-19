import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Social from '../components/Social'
import Friends from '../components/Friends'

const StyledHome = styled.div`
    .leo-img {
        ${tw`mt-4`}
    }
`

const Home = () => {
    return (
        <StyledHome>
            <Hero />
            <Intro />
            <Projects />
            <Social />
            <Friends />
        </StyledHome>
    )
}

export default Home
