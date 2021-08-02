/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 08:45:05
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import { Layout, Pagination } from '../components/common'
import PostCard from '../components/PostCard'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
<Title bgtext="Blogs" titletext="Latest Posts" />

const BlogPost = ({ pageQuery, location, pageContext }) => {

const data = useStaticQuery(graphql`
    {
      allGhostPost(sort: {fields: published_at, order: DESC}, skip: 0, limit: 3) {
        edges {
          node {
            title
            slug
            reading_time
            feature_image
            custom_excerpt
            featured
            ghostId
            html
            id
            meta_description
            meta_title
            og_description
            og_image
            og_title
            primary_author {
              bio
              id
              name
              url
              profile_image
            }
            primary_tag {
              id
              name
              url
              slug
              description
              accent_color
            }
            published_at
            created_at
          }
          previous {
            excerpt
            id
            title
            url
            slug
          }
        }
      }
    }
  `)

const posts = data.allGhostPost.edges

    return (
        <>
        <div className="px-16 py-10 my-20 bg-wallpaper" id="news">
               <Title bgtext="Blogs" titletext="Latest Posts" />
                <section className="px-16">



      <div className="relative w-full mx-auto">

        <div className="grid mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">


        {posts.map(({ node }) => (
   <div className="mx-4 my-4 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="0.8s" key={node.slug}>

   <PostCard key={node.id} post={node} />
   </div>
                        ))}
              </div>
      </div>



                </section>

            </div>
        </>
    )
}

BlogPost.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default BlogPost

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
