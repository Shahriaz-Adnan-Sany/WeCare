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
    console.log(matchData);

    return (

        <div className="py-4">
            <div className="card mx-auto w-50">
                <h2>{matchData[0]?.id}This is card </h2>

                <img src={matchData[0]?.img} className="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{matchData[0]?.title}</h5>
                    <p class="card-text">{matchData[0]?.description}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleItem;