import React from 'react';
import '../../css/AuthorFilter.css';

const AuthorFilter = ({filter, disableSearch=false}) => {
    return (
        <div className="author-filter">
            <div className="container">
                <h1>Photo Gallery</h1>
                {disableSearch ? "" : 
                (
                    <div className="search-box">
                        <div className="search-icon">
                            <i className="fa fa-search search-icon"></i>
                        </div>
                        <input type="text" placeholder="Search Author" id="search" onChange={(event) => filter(event.target.value)}/>
                        <div className="go-icon">
                            <i className="fa fa-arrow-right"></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default AuthorFilter;