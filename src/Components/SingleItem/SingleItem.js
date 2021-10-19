import React from 'react';
import useItems from '../Hooks/DataHook';

const SingleItem = (props) => {
    const [item, setItem] = useItems(props);
    return (
        <div className="single-item">
            <img src="" alt="" />
            <h4></h4>
            <p></p>
        </div>
    );
};

export default SingleItem;