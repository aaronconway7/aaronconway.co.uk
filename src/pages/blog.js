import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
    InstantSearch,
    Hits,
    connectStateResults,
    Pagination,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

import FeaturedPost from '../components/FeaturedPost'
import PostPreview from '../components/PostPreview'
import Search from '../components/Search'
import Emoji from '../components/Emoji'

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Results = connectStateResults(
    ({ searchState: state, searchResults: res, children }) =>
        res && res.nbHits > 0 ? (
            children
        ) : (
            <p className={`empty-msg`}>
                Nothing to see here <Emoji emoji={`👀`} label={`eyes`} />
            </p>
        )
)

const Home = () => {
    const data = useStaticQuery(graphql`
        {
            posts: allContentfulPost(sort: { fields: date, order: DESC }) {
                edges {
                    node {
                        slug
                        title
                        date
                        featuredImage {
                            fluid(maxWidth: 1000) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        content {
                            fields {
                                excerpt
                                readingTime {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <StyledHome>
            <FeaturedPost data={data.posts.edges[0].node} />
            <div className={`posts`}>
                <InstantSearch searchClient={searchClient} indexName={`Blog`}>
                    <Search />
                    <Results>
                        <Hits hitComponent={PostPreview} />
                        <Pagination />
                    </Results>
                </InstantSearch>
            </div>
        </StyledHome>
    )
}

export default Home

const StyledHome = styled.div`
    .posts {
        ${tw`w-4/5 mx-auto py-32 max-w-lg`}

        .empty-msg {
            ${tw`text-center opacity-50`}
        }

        .ais-Pagination-list {
            ${tw`flex justify-center`}

            .ais-Pagination-link {
                ${tw`p-2`}
            }

            .ais-Pagination-item--page {
                ${tw`border rounded-md shadow mx-1 hover:shadow-md transition-shadow duration-300 ease-in-out`}
            }

            .ais-Pagination-item--selected {
                ${tw`text-white pointer-events-none font-bold`}
                background-color: var(--brand-red);
            }

            .ais-Pagination-item--disabled {
                ${tw`opacity-25 pointer-events-none`}
            }
        }
    }
`
