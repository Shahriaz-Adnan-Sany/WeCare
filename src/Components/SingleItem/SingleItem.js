import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleItem = () => {
    const { serviceID } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const matchData = data.filter(singleData => singleData.id == serviceID);

    return (

        <div className="py-4">
            <div className="card mx-auto w-50">
                <img src={matchData[0]?.img} className="card-img-top" alt="" />
                <div class="card-body">
                    <h4 class="card-title fw-bold">{matchData[0]?.title}</h4>
                    <p class="card-text fw-bold">{matchData[0]?.description}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleItem;