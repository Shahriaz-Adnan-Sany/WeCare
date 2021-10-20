import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'
const Items = (props) => {
    const { title, description, id, img } = props.item;
    return (
        <div className="item-container my-4 col-md-4 g-4">
            <div className="single-item text-center mx-auto shadow-lg p-3 rounded-4">
                <div className="item-cart-img mb-2 p-2">
                    <img className="img-fluid mx-auto rounded-3 " src={img} alt="" />
                </div>
                <div className="item-info text-center my-2 fw-bolder">
                    <h4 className="fw-bold" >{title}</h4>
                    <hr className="bg-secondary" />

                    <p>{description.slice(0, 200)}</p>
                    <hr className="bg-secondary" />

                </div>
                <Link to={`/SingleItem/${id}`}><button className="btn btn-success mx-auto"> <i class="fas fa-file-signature"></i> Know More</button></Link>
            </div>
        </div>
    );
};

export default Items;