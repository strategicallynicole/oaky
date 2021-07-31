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
        <div className="flex-auto p-10 m-10 card wow fadeInLeft"  data-wow-delay="300ms"
        data-wow-duration="1000ms">
        <div className="glass">
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image &&
                    <img className="w-full h-full post-card-image" src={post.feature_image}></img>}
                {post.tags && <div className="text-white mulish"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                <h4 className="post-card-title montserrat">{post.title}</h4>
            </header>
            <section className="text-white mulish post-card-excerpt">{post.excerpt}</section>
            <footer className="post-card-footer mulish">
                <div className="post-card-footer-left">

                    <span>Posted <ReactTimeAgo date={post.published_at} locale="en-US"/></span>
                </div>
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
        </Link></div></div>
    )
}

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
