/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 13:19:22
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react';
import { Tags } from '@tryghost/helpers-gatsby'
import NewsQuery from './NewsQuery'
import { MetaData } from '../common/meta'
import  PostCard  from '../PostCard'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Titles/h2';
import'../PostCard/postcard.scss';

const News = () => {
  const data = useStaticQuery(graphql`
    {

      allGhostPost(limit: 3, skip: 0, sort: {fields: published_at, order: DESC}) {

        edges {

          node {
            html
            title
            excerpt
            feature_image
            meta_description
            meta_title
            featured
            ghostId
            plaintext
            published_at
            created_at
            reading_time
            feature_image

            slug
            tags {
              name
              slug
              url
            }
            primary_author {
                profile_image
                url
                name
              }
            url
            id
          }
        }
      }
    }
  `)
  const posts = data.allGhostPost.edges

  return (
    <>


<section>
<Title bgtext="Blogs" titletext="Latest Posts" />
<div className="px-10">

<div className="flex flex-wrap -mx-6 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6">

         {posts.map(({ node, index }) => (
     
  <div className="w-5/6 px-6 my-6 overflow-hidden sm:my-6 sm:px-6 sm:w-5/6 md:my-6 md:px-6 md:w-5/6 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3">

            <PostCard key={node.id} index={index+1} post={node} />
    </div>
                            ))}
                            
</div>
</div>
</section>


    </>
)
};
export default News
