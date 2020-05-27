import React from 'react';
import { Link } from 'react-router-dom';

const HomeCards = ({card}) => {
    const { header, title, description, buttonDescription, link } = card;
    return ( 
        <div className="col-lg-4">
            <div className="card text-center">
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={link} className="btn btn-primary">{buttonDescription}</Link>
                </div>
            </div> 
            <br />
        </div>
     );
}
 
export default HomeCards;