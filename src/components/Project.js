import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'

const Project = ({ data }) => (
    <StyledProject to={`/projects/${data.slug}`}>
        <motion.div className={`project`} initial={`rest`} whileHover={`hover`}>
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
                    fluid={data.thumbnail.localFiles[0].childImageSharp.fluid}
                    alt={data.title}
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
                {data.title}
            </motion.span>
        </motion.div>
    </StyledProject>
)

export default Project

const StyledProject = styled(Link)`
    .project {
        ${tw`relative bg-black overflow-hidden`};
        ${({ theme }) => (theme.darkMode ? tw`bg-black` : tw`bg-white`)};
        height: max-content;

        .name {
            ${tw`absolute bottom-0 left-0 mb-6 ml-6 md:text-lg`};
        }
    }
`
