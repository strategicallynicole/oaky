/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 01/07/2021 - 04:29:42
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/07/2021
 * - Author          :
 * - Modification    :
 **/
const path = require(`path`)

const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

let ghostConfig

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } =
        process.env.NODE_ENV === `development`
            ? ghostConfig.development
            : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(
            `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
        ) // eslint-disable-line
    }
}

if (
    process.env.NODE_ENV === `production` &&
    config.siteUrl === `http://localhost:8000` &&
    !process.env.SITEURL
) {
    throw new Error(
        `siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`
    ) // eslint-disable-line
}

/**
 * This is the place where you can tell Gatsby which plugins to use
 * and set them up the way you want.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
 *
 */
module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITEURL || config.siteUrl,
        getform_url: `oakwave.com`,
    },
    plugins: [
        /**
         *  Content Plugins
         */
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `pages`),
                name: `pages`,
            },
        },
        `gatsby-plugin-image`,
        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-ghost`,
            options:
                process.env.NODE_ENV === `development`
                    ? ghostConfig.development
                    : ghostConfig.production,
        },
        /**
         *  Utility Plugins
         */
         {
            resolve: `gatsby-plugin-ghost-manifest`,
            options: {
                short_name: config.shortTitle,
                start_url: `/`,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: `minimal-ui`,
                icon: `static/${config.siteIcon}`,
                legacy: true,
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
                feeds: [
                    generateRSSFeed(config),
                ],
            },
        },
     /*    {
            resolve: 'gatsby-plugin-feed-generator',
            options: {
            generator: `GatsbyJS`,
            name: 'myfeed',
            rss: true, // Set to true to enable rss generation
            json: true, // Set to true to enable json feed generation
            siteQuery: `{
                allGhostSettings {
                    edges {
                        node {
                            title
                            description
                        }
                    }
                }
            }`,
            feeds: [
                {
                  name: 'myfeed', // This determines the name of your feed file => feed.json & feed.xml
                  query: `
                  {
                    allGhostPost {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                                path
                                title
                                html
                            }
                        }

                    }

                  `,
                  normalize: ({ query: { site } }) => {
                    return allGhostPost.edges.node.map(edges => {
                      return {
                        title: edges.node.title,
                        date: edges.node.date,
                        url: site.siteMetadata.siteUrl + edges.node.path,
                        html: edges.node.html,
                      }
                    })
                  },
                },
              ],

            },
        },
 */

        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                query: `
                {
                    allGhostPost {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostPage {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostTag {
                        edges {
                            node {
                                id
                                slug
                                feature_image
                            }
                        }
                    }
                    allGhostAuthor {
                        edges {
                            node {
                                id
                                slug
                                profile_image
                            }
                        }
                    }
                }`,
                mapping: {
                    allGhostPost: {
                        sitemap: `posts`,
                    },
                    allGhostTag: {
                        sitemap: `tags`,
                    },
                    allGhostAuthor: {
                        sitemap: `authors`,
                    },
                    allGhostPage: {
                        sitemap: `pages`,
                    },
                },
                exclude: [
                  //  `/404`,
                ],
                createLinkInHead: true,
                addUncaughtPages: true,
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-force-trailing-slashes`,

        {
            resolve: `gatsby-plugin-anchor-links`,
            options: {
                offset: -100,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,

            options: {
                sassOptions: {
                    includePaths: [`./src`],
                },
                useResolveUrlLoader: true,
                implementation: require(`sass`),
                postCssPlugins: [
                    require(`postcss-preset-env`),
                    require(`postcss-import`),
                    require(`tailwindcss`),
                    require(`./tailwind.config.js`), // Optional: Load custom Tailwind CSS configuration
                    require(`autoprefixer`),
                ],
            },
        },

        `gatsby-transformer-yaml`,

        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Montserrat ital`,
                    `sans-serif:300`,
                    `300i`,
                    `400`,
                    `400i`,
                    `500`,
                    `600`,
                    `700`,
                    `900`,
                ],
                fonts: [`Mulish`, `sans-serif:300`, `400`, `500`, `600`, `700`],
                display: `swap`,
            },
        },
    ],
}
