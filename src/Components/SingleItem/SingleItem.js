import React from 'react';
import { useParams } from 'react-router';

const SingleItem = () => {
    const { serviceID } = useParams();
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default SingleItem;