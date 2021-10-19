import React from 'react';
import useItems from '../../Hooks/DataHook';
import Items from '../../Items/Items';

const HomeService = (props) => {
    const [items, setItems] = useItems(props);
    const item = items.slice(0, 6);
    return (
        <div className="course-preview my-4 row">
            <h3 className="my-2">Here Are Some Services Preview</h3>

            {
                item.map(item => <Items item={item} key={item.key}>

                </Items>)
            }
        </div>
    )
}
export default HomeService;