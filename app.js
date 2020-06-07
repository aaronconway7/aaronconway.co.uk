import React from 'react'
import 'typeface-poppins'

import './src/css/tailwind.css'

import ContextProvider from './src/store/state'
import SEO from './src/components/SEO'
import Layout from './src/layouts/layout'

const App = ({ element }) => {
    if (typeof window !== 'undefined') console.log(`I see you spying 👀`)

    return (
        <ContextProvider>
            <SEO />
            <Layout>{element}</Layout>
        </ContextProvider>
    )
}

export default App
