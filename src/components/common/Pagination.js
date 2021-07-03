/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 02/07/2021 - 18:57:51
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev">
                            Previous
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location readmore-btn">Page {humanPageNumber} of {numberOfPages}</div>}
            <div>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            Next
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
