/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 18:56:59
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2021
    * - Author          :
    * - Modification    :

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/

import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { MetaData } from '../components/common/meta'
import Title from '../components/Titles/h1.js'

import { DiscussionEmbed } from 'disqus-react'

// texts as props

const Post = ({ data, location }) => {
    const post = data.ghostPost
    const image = getImage(post.feature_image)
    const title = post.title
    const titletext = post.title
    const bgtext = post.title
    const date = post.createdAt

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>

                <div className="relative py-16 overflow-hidden">
                    <div clasName="w-full h-auto z-1" style={{ display: `grid`,
                        backgroundImage: `url(${post.feature_image})`, backgroundSize: `100% 100%`, height: `20rem`, backgroundPositionX: `50%`, backgroundPositionY: `-250px`, backgroundAttachment: `fixed` }}>

                        <div
                            style={{
                                // By using the same grid area for both, they are stacked on top of each other
                                gridArea: `1/1`,
                                position: `relative`,
                                // This centers the other elements inside the hero component
                                placeItems: `center`,
                                display: `grid`,
                            }}
                            className="z-0 px-16 py-16 leading-3"
                        ><div>      <Title bgtext={ title } titletext={ titletext } /></div>

                        </div></div>
                    <div className="relative w-full mx-auto text-lg" aria-hidden="true">
                        <svg
                            className="absolute transform translate-x-32 top-12 left-full"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg
                            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg
                            className="absolute transform translate-x-32 bottom-12 left-full"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
                <div className="relative min-h-full px-16 lg:px-8">
                    <div className="mx-auto text-lg prose max-w-none">
                        {/*  <h1>
            <span className="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase">
              Introducing
            </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              JavaScript for Beginners
            </span>
        </h1>*/}
                        <article
                            className="min-h-screen mx-auto prose prose-2xl max-w-none text-gray-50 hmt-6 prose-indigo load-external-scripts mb-30"
                            dangerouslySetInnerHTML={{ __html: post.html }}>

                        </article><p></p>
                        <section className="mt-10 load-external-scripts">
                            <DiscussionEmbed
                                shortname="oakwave"
                                config={
                                    {
                                        url: post.url,
                                        identifier: post.id,
                                        title: post.title,
                                        language: `en_US`, //e.g. for Traditional Chinese (Taiwan)
                                    }
                                }
                            /></section>

                    </div>
                </div>

            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`

