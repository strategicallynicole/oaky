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
**/
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { MetaData } from '../components/common/meta'
import Title from "../components/Titles/h1.js";

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/



const Post = ({ data, location }) => {
    const post = data.ghostPost

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
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full mx-auto text-lg max-w-prose" aria-hidden="true">


          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <article className="max-w-full mx-auto text-lg content">

                        { post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={ post.feature_image } alt={ post.title } />
                            </figure> : null }
                            <Title bgtext={ post.title } titletext={ post.title } />
                            {/* The main post content */ }
                            <section
                                className="mx-auto prose prose-xl text-gray-50 hmt-6 prose-indigo load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            ></section>
                        </article>
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


