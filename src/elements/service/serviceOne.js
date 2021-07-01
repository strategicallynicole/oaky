/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 01/07/2021 - 14:23:23
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const ServiceOne = (props) => {

    return (
        <>
            {services.map((data) => (
                <div className={props.column} key={data.node.id}>
                    <div className={`service ${props.serviceStyle}`}>
                        <div className="inner">
                            <div className="number">
                                <span>{data.node.number}</span>
                            </div>
                            <div className="content">
                                <h3 className="title">{data.node.title}</h3>
                                <p className="description">{data.node.description}</p>
                                <a className="readmore-btn" href="#service">{data.node.readmoreButton}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ServiceOne
