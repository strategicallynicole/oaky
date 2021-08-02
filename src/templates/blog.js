/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 15:08:41
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
import Layout from '../components/layout'
import { Pagination } from '../components/common'
import PostCard from '../components/PostCard'
import { MetaData } from '../components/common/meta'
import '../styles/templates/blog.scss'
/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>

<div className="flex flex-wrap w-full -mx-6 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6">

{posts.map(({ node, index }) => (
     <>
<div className="flex-none w-full px-6 my-6 overflow-hidden sm:my-6 sm:px-6 sm:w-full md:my-6 md:px-6 md:w-full lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3">

   <PostCard key={node.id} index={index+1} post={node} />
   </div>
   </>
                   ))}
</div>
                    <Pagination pageContext={pageContext} />
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
