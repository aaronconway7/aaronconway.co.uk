import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'
import routes from '../constants/routes'

const Styled404 = styled.div``

const NotFoundPage = () => (
    <Styled404>
        <SEO title={`404: Not found`} />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to={routes.home}>Return Home</Link>
    </Styled404>
)

export default NotFoundPage
