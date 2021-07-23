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
import React from 'react';
import { Layout, PostCard, Pagination } from '../components/common'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"


const BlogPost = ({pageQuery, location, pageContext}) => {
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

const blogs = data.allGhostPost.edges
    return (
        <div className="bg-transparent rn-post-area rn-section-gapBottom pt--200" id="news">
            <div className="px-20">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb--40">
                            <h2 className="title">Latest News <span className="bg">News</span></h2>
                        </div>
                    </div>
                </div>
                <section className="post-feed">

                    {blogs.map(blog => (
                     <div className="row row--45 holderbox">

                                <div className="wow fadeInDown" data-wow-delay="200ms" data-wow-duration="0.8s" key={blog.node.slug}>
                        {[blog].map(({ node }) => (
                            <PostCard key={node.id} post={node} />
                            ))}

                        </div>

</div>
  ))}



                    </section>


                </div>
            </div>
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
