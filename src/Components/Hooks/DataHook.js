import { useEffect } from "react";
import { useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);
    // Returning Items
    return [items, setItems];
};
export default useItems;