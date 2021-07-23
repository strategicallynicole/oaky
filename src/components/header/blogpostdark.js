import React, { Component } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import propTypes from 'prop-types'
import Title from '../Titles/h1.js'

function HeaderBlogPostDark({ post }) {
    const mainimage = post.image
    const title = post.title
    const bgtext = post.title
    const titletext = post.title
    const date = post.published_at
    let iconBgColor =
     { black: `bg-black-gradient` }

    /*     style={{
        backgroundImage: `url(${post.feature_image})`
    }} */
    return (
        <>
            <div className="relative flex items-center p-0 min-h-screen-75">

                <div clasName="absolute w-full h-full z-1" style={{ display: `grid` }}>
                    <GatsbyImage
                        style={{
                            gridArea: `1/1`,
                            // You can set a maximum height for the image, if you wish.
                            // maxHeight: 600,
                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                        aspectRatio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt=""
                        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                        src={mainimage}
                        formats={[`auto`, `webp`, `avif`]}
                    />

                    <div
                        style={{
                            // By using the same grid area for both, they are stacked on top of each other
                            gridArea: `1/1`,
                            position: `relative`,
                            // This centers the other elements inside the hero component
                            placeItems: `center`,
                            display: `grid`,
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        <div className="absolute w-full h-full bg-black opacity-40 z-2">

                            <div className="container px-4 mx-auto z-3">
                                <div className="flex flex-wrap justify-center -mx-4 text-white">
                                    <Title bgtext={ title } titletext={ titletext } />
                                </div>
                            </div>
                            <div className="container relative px-4 pt-20 mx-auto -mt-64 z-3">

                                <div className="flex flex-wrap justify-center -mx-4 text-white">
                                    {date}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderBlogPostDark

