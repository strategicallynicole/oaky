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
import { MetaData } from './meta'
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
      <section className="py-16 my-10">
          <div className="relative px-4 pt-16 pb-20 bg-transparent sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="inset-0">
           <div className=" h-1/3 sm:h-2/3" />
         </div>
            <div className="relative max-w-full mx-auto">
           <Title bgtext="Blogs" titletext="Latest Posts" />
           <div class="flex flex-wrap -mx-3 gap-x-1	overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-3 xl:-mx-3 place-content-center">
          {posts.map(({ node, index }) => (
              <>

            <PostCard key={node.id} index={index+1} post={node} />
            </>
                            ))}
        </div>

         </div>
          </div>
        </section>
    </>
)
};
export default News
