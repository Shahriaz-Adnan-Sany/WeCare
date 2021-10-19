import React from 'react';
import useItems from '../Hooks/DataHook';
import Items from '../Items/Items';
import './Services.css';

const Services = (props) => {
    const [items, setItems] = useItems(props);
    return (
        <div className="courses-bg px-4">
            <h2>Here are our all Courses</h2>
            <h3>Ongoing Courses: {items.length}</h3>
            <div className="row">
                {
                    items.map(item => <Items item={item} key={item.key}>

                    </Items>)
                }
            </div>
        </div>
    );
};

export default Services;