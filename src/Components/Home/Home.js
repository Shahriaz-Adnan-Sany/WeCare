import React from 'react';
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';
import useItems from '../Hooks/DataHook';
import Items from '../Items/Items';
import './Home.css';

const Home = (props) => {
    const [items, setItems] = useItems(props);
    const item = items.slice(0, 6);
    return (
        <div className="home-container px-4">
            {/* Showing Slider Here */}
            <div className="slider ">
                <ControlledCarousel></ControlledCarousel>
            </div>

            {/* Showing Items Here */}
            <div className="course-preview row">
                <h3 className="my-2">Here Are Some Services Preview</h3>

                {
                    item.map(item => <Items item={item} key={item.key}>

                    </Items>)
                }
            </div>
            {/* Showing Features Here */}
            <div className="Feature my-2 p-4">
                {

                }
            </div>

        </div>
    );
};

export default Home;