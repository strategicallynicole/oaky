/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 14:05:30
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '../Tags/index.js'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import "./PostCard.comp.scss";
import dateFormat from 'dateformat';

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`;
    const readingTime = readingTimeHelper(post);
    const time = dateFormat(post.created_at, "mmmm dS");
    const image = post.feature_image;
    return (
        <>

<article className="Card">
        <div className="Card__Image Card__Image_blue">
        {post.feature_image &&   <Link to={url}>
      <img src={post.feature_image} alt={post.title} />
  </Link>}

        </div>
        <div className="Card__Content">
          <div className="Card__Header">
            <span className="Card__Tag">          <Tags post={post} visibility="public" autolink={true} />
</span>
            <span className="Card__Date">
{time}            </span>
          </div>
          <div className="Card__Body">
            <span className="Card__Title">
{post.title}
    </span>
            <div className="Card_Description">
              <p>
              {post.excerpt}
              </p>
            </div>
          </div>
          <div className="Card__Footer">
            <div className="Card__Footer-Author">
              <div className="Author-Img">
              </div>
              <div className="Author-Name">{readingTime}</div>
            </div>
            <div className="Card__Footer-Link">
              <a nofollow noreferrer href="{url}">Read more 🡢</a>
            </div>
          </div>
        </div>
      </article>



</>
            );};

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        created_at: PropTypes.string.isRequired,

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
