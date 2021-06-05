import { useStaticQuery, graphql } from 'gatsby'

import SocialImg from '../assets/img/me.jpg'

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        twitter
                        backgroundColor
                    }
                }
            }
        `
    )
    return { ...site.siteMetadata, socialImage: SocialImg }
}
