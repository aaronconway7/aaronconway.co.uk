/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import App from './app'

export const wrapRootElement = App

const MagicScriptTag = () => {
    let codeToRunOnClient = `
  (function() {
    function getInitialDarkMode() {
        const persistedDarkModePreference = window.localStorage.getItem('darkMode')
        const hasPersistedPreference = typeof persistedDarkModePreference === 'string'
    
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
            return persistedDarkModePreference
        }
    
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        const hasMediaQueryPreference = typeof mql.matches === 'boolean'
        console.log("hasMediaQueryPreference", hasMediaQueryPreference);
        if (hasMediaQueryPreference) {
            return mql.matches
        }
    
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to true.
        return true
    }
    const darkMode = getInitialDarkMode();
    const root = document.documentElement;
    root.style.setProperty('--initial-dark-mode', darkMode);
  })()`
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />)
}
