import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import loadable from '@loadable/component'

import Emoji from './Emoji'
import HomeSectionLayout from '../layouts/homeSection'
import Project from './Project'
import useProjects from '../hooks/use-projects'
const Masonry = loadable(() => import('../layouts/masonry'))

const Projects = () => {
    const {
        allAirtable: { edges: projects },
    } = useProjects()

    return (
        <StyledProjects id={`projects`}>
            <HomeSectionLayout>
                <h1 className={`title`}>
                    Projects <Emoji emoji={`💻`} label={`Laptop`} />
                </h1>
                <p className={`text`}>
                    I'm very lucky to have worked with a number of amazing{' '}
                    <span className={`red`}>clients</span> & on a number of
                    amazing <span className={`red`}>projects</span>.
                </p>
            </HomeSectionLayout>
            <div className={`projects`}>
                <Masonry mdCols={2}>
                    {projects.map(({ node: { data: project } }) => (
                        <Project data={project} key={project.title} />
                    ))}
                </Masonry>
            </div>
        </StyledProjects>
    )
}

export default Projects

const StyledProjects = styled.section`
    ${tw`grid grid-cols-2`};
    background-color: ${({ theme }) =>
        theme.darkMode ? `rgba(255, 255, 255, 0.05)` : `rgba(0, 0, 0, 0.05)`};

    .projects {
        ${tw`grid gap-0 h-screen overflow-auto`}
    }
`
