import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
    DiIllustrator,
    DiHtml5,
    DiSass,
    DiGulp,
    DiPhp,
    DiPhotoshop,
    DiCss3,
    DiBootstrap,
    DiReact,
    DiAngularSimple,
    DiJqueryLogo,
    DiNodejsSmall,
} from 'react-icons/di'
import { FaDog } from 'react-icons/fa'
import { GoRuby } from 'react-icons/go'
import { AiOutlineSketch } from 'react-icons/ai'
import { SiSvelte, SiTailwindcss } from 'react-icons/si'
import { FiCornerDownLeft } from 'react-icons/fi'
import 'typeface-ibm-plex-mono'
import { motion } from 'framer-motion'

import Emoji from '../components/Emoji'
import BrowserScreen from './browser-screen'
import LineThroughLink from '../components/LineThroughLink'

const TECH_LOOKUP = {
    illustrator: <DiIllustrator style={{ color: `orange` }} />,
    html: <DiHtml5 style={{ color: `#e54c21` }} />,
    [`ruby on rails`]: <GoRuby style={{ color: `red` }} />,
    sass: <DiSass style={{ color: `#bf4080` }} />,
    sketch: <AiOutlineSketch style={{ color: `orange` }} />,
    gulp: <DiGulp style={{ color: `#cf4647` }} />,
    php: <DiPhp style={{ color: `#8892BF` }} />,
    photoshop: <DiPhotoshop style={{ color: `#1473e6` }} />,
    css: <DiCss3 style={{ color: `#264de4` }} />,
    pug: <FaDog style={{ color: `#a86454` }} />,
    bootstrap: <DiBootstrap style={{ color: `#563d7c` }} />,
    react: <DiReact style={{ color: `#61dafb` }} />,
    angular: <DiAngularSimple style={{ color: `#a70803` }} />,
    jquery: <DiJqueryLogo style={{ color: `#0669ad` }} />,
    nodejs: <DiNodejsSmall style={{ color: `#43853d` }} />,
    svelte: <SiSvelte style={{ color: `#ff3e00` }} />,
    tailwind: <SiTailwindcss style={{ color: `#14b4c6` }} />,
}

const ProjectPage = ({ data }) => {
    const {
        title,
        type,
        description,
        tech,
        link,
        date,
        artwork,
        screenshots,
        tags,
        team,
    } = data.allAirtable.edges[0].node.data

    return (
        <StyledProjectPage>
            <div className={`go-back`}>
                <FiCornerDownLeft className={`icon`} />
                <LineThroughLink to={`/#projects`}>Go Back</LineThroughLink>
            </div>
            <div className={`text-content`}>
                <div className={`heading`}>
                    <small className={`type`}>{type}</small>
                    <h1 className={`title`}>{title}</h1>
                    {tags && (
                        <div className={`tags`}>
                            {tags.map((tag, i) => (
                                <span className={`tag`} key={i}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <ul className={`stats`}>
                    <li className={`stat`}>
                        <span className={`stat-label`}>Date:</span>
                        <span className={`date`}>{date}</span>
                    </li>
                    {tech && (
                        <li className={`stat`}>
                            <span className={`stat-label`}>Tech:</span>
                            <div className={`tech`}>
                                {tech.map(
                                    (tech, i) =>
                                        TECH_LOOKUP[tech] && (
                                            <span
                                                className={`tech-icon`}
                                                key={i}
                                            >
                                                {TECH_LOOKUP[tech]}
                                            </span>
                                        )
                                )}
                            </div>
                        </li>
                    )}
                    {team && (
                        <li className={`stat`}>
                            <span className={`stat-label`}>Team Members:</span>
                            <div className={`team-members`}>
                                {team.map((member, i) => (
                                    <a
                                        className={`member`}
                                        href={member.data.link}
                                        target={`_blank`}
                                        key={i}
                                    >
                                        <img
                                            src={
                                                member.data.solo[0].thumbnails
                                                    .small.url
                                            }
                                            alt={member.name}
                                        />
                                    </a>
                                ))}
                            </div>
                        </li>
                    )}
                </ul>
                <p className={`description`}>{description}</p>
                {link && (
                    <motion.a
                        className={`link`}
                        href={link}
                        target={`_blank`}
                        whileHover={`hover`}
                        variants={{
                            hover: {
                                x: 10,
                            },
                        }}
                    >
                        Go to Project{' '}
                        <motion.div
                            className={`motion-emoji`}
                            variants={{
                                hover: {
                                    x: 75,
                                    opacity: 0,
                                },
                            }}
                        >
                            <Emoji emoji={`🚀`} label={`rocket`} />
                        </motion.div>
                    </motion.a>
                )}
            </div>
            <div className={`img-content`}>
                {artwork && (
                    <div className={`artwork`}>
                        {artwork.localFiles.reverse().map(artwork => (
                            <Img
                                className={`img`}
                                fluid={artwork.childImageSharp.fluid}
                                alt={`artwork`}
                            />
                        ))}
                    </div>
                )}
                {screenshots && (
                    <div className={`screenshots`}>
                        {screenshots.localFiles.reverse().map((screen, i) => (
                            <BrowserScreen key={i}>
                                <Img
                                    className={`screen`}
                                    fluid={screen.childImageSharp.fluid}
                                    alt={`screen`}
                                />
                            </BrowserScreen>
                        ))}
                    </div>
                )}
            </div>
        </StyledProjectPage>
    )
}

export default ProjectPage

export const query = graphql`
    query($slug: String!) {
        allAirtable(
            filter: { table: { eq: "Projects" }, data: { slug: { eq: $slug } } }
        ) {
            edges {
                node {
                    data {
                        title
                        slug
                        type
                        description
                        tech
                        link
                        date
                        artwork {
                            localFiles {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        screenshots {
                            localFiles {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        tags
                        team {
                            id
                            data {
                                name
                                link
                                solo {
                                    thumbnails {
                                        small {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const StyledProjectPage = styled.div`
    font-family: 'IBM Plex Mono', monospace;
    ${tw`grid gap-20 w-4/5 max-w-screen-lg mx-auto py-20`};

    .go-back {
        ${tw`absolute left-0 top-0 ml-4 mt-4 opacity-50 hover:opacity-75 flex items-center text-sm transition duration-200 ease-in-out`}

        .icon {
            ${tw`mr-2`}
        }
    }

    .text-content,
    .img-content {
        ${tw`grid gap-8`}
        grid-auto-rows: max-content;
    }

    .text-content {
        .heading {
            .type {
                ${tw`opacity-50`}
            }

            .title {
                ${tw`text-4xl`}
            }

            .tags {
                ${tw`flex flex-wrap mt-3`}

                .tag {
                    ${tw`mr-2 mb-2 bg-gray-700 rounded-full py-1 px-4 text-xs text-black transition duration-200 ease-in-out`}
                    background-color: ${({ theme }) =>
                        theme.darkMode
                            ? `rgba(255,255,255,0.25)`
                            : `rgba(0,0,0,0.25)`};
                    color: black;

                    &:hover {
                        background-color: ${({ theme }) =>
                            theme.darkMode
                                ? `rgba(255,255,255,0.55)`
                                : `rgba(0,0,0,0.5)`};
                    }

                    &:last-child {
                        ${tw`mr-0`}
                    }
                }
            }
        }

        .stats {
            ${tw`grid gap-2 text-sm`}

            .stat {
                ${tw`flex items-center`}

                .stat-label {
                    ${tw`opacity-50 font-light mr-2`}
                }

                .tech,
                .team-members {
                    ${tw`flex flex-wrap`}
                }

                .tech {
                    .tech-icon {
                        ${tw`mr-1`}

                        &:last-child {
                            ${tw`mr-0`}
                        }
                    }
                }

                .team-members {

                    .member {
                        ${tw`border-2 rounded-full overflow-hidden h-6 w-6 mr-1 hover:opacity-50 duration-200 ease-in-out`}
                        ${({ theme }) =>
                            theme.darkMode
                                ? tw`border-white`
                                : tw`border-black`}

                        &:last-child {
                            ${tw`mr-0`}
                        }
                    }
                }
            }
        }

        .description {
            ${tw`leading-relaxed`}
        }

        .link {
            ${tw`font-bold py-4 px-10 rounded text-sm text-white! flex overflow-hidden`}
            background-color: var(--brand-red);
            width: max-content;

            .motion-emoji {
                ${tw`ml-2`}
            }
        }
    }

    .img-content {
        .artwork,
        .screenshots {
            ${tw`grid gap-8`}
            grid-auto-rows: max-content;
        }
    }
`
