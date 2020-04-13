import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import routes from '../constants/routes'

const SecondPage = () => (
    <>
        <SEO title={`Page two`} />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to={routes.home}>Go back to the homepage</Link>
    </>
)

export default SecondPage
