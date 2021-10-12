import React from 'react';

const SearchComponent = () => {
    return (
        <div className='ui grid'>
            <div className="six wide centered column">
                <div className="fluid ui icon input">
                    <input
                        // onChange={}
                        type='text' name='search' placeholder='search...'
                    />
                    <i className="search icon" />
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
