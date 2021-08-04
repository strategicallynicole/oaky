import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '../Tags'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import "./postcard.scss";
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)



const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (




    <div className="max-w-2xl mx-auto overflow-hidden rounded-lg shadow-md wow fadeInLeft glass"  data-wow-delay="300ms"
    data-wow-duration="1000ms">
    <img className="object-cover w-full h-64" src={post.feature_image} alt={post.title}/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-white mulish">                <Tags post={post} visibility="public" autolink={false} />
</span>
            <Link to={url} className="block mt-2 text-2xl font-semibold text-white montserrat white-text dark:text-white hover:text-blue "><span className="leading-4 tracking-tighter white-text">{post.title}</span></Link>
            <p className="mt-2 text-sm text-white dark:text-white mulish">{post.excerpt}</p>
        </div>

        <div className="mt-4">


        <div className="flex flex-wrap -mx-6 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6">

<div className="w-1/2 px-6 overflow-hidden sm:px-6 sm:w-1/2 md:px-6 md:w-1/2 lg:px-6 lg:w-1/2 xl:px-6 xl:w-1/2">

<div className="flex items-start justify-start px-6 py-6 place-items-start justify-items-start items-left">

<div className="flex items-start justify-start pl-6 my-3 text-xs text-white place-items-start justify-items-start items-left text-gray-50 dark:text-gray-50">{readingTime}</div>
</div></div>

<div className="flex items-end justify-end px-6 py-6 place-items-end justify-items-end items-right">

<div className="flex items-end justify-end pl-6 my-3 text-xs text-white place-items-end justify-items-end items-right text-gray-50 dark:text-gray-50"> Posted &nbsp; <ReactTimeAgo date={post.published_at} locale="en-US"/></div>
</div></div>



        </div>
    </div>
</div>

    )
};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
