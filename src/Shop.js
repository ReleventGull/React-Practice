import React,  {useState, useEffect} from "react";
import {getClothing} from './apiCall/index'


const Shop = () => {
    const [shopitem, setShoptItems] = useState([])
    
    useEffect(()=> {
        async function getClothes () {
            const clothes = await getClothing()
            setShoptItems(clothes)
        }
        getClothes()
    }, [])
    console.log(shopitem)
    
    return (
        !shopitem ? <div>Loading</div>:
        shopitem.forEach(item => <p>awdawd</p>)
        
)}




export default Shop