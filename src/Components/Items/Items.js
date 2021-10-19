import React from 'react';
import './Items.css'
const Items = (props) => {
    const { title, description, img } = props.item;
    return (
        <div className="item-container col-md-4 g-4">
            <div className="single-item text-center mx-auto shadow-lg p-3 rounded-4">
                <div className="mx-auto cart-img">
                    <img className=" img-fluid rounded-3 mb-2" src={img} alt="" />
                </div>
                <div className="item-info text-center my-2 fw-bolder">
                    <h4 className="fw-bold" >{title}</h4>
                    <hr className="bg-secondary" />


                    <p>{description.slice(0, 200)}</p>
                    <hr className="bg-secondary" />

                </div>
                <button className="btn btn-success"> <i class="fas fa-file-signature"></i> Know More</button>
            </div>
        </div>
    );
};

export default Items;