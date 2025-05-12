import React, { useEffect, useState } from 'react';
import './styles.css';




export default function LoadMoreData() {

    const [loading , setLoading] = useState(false);
    const [products , setProducts] = useState([]);
    const [count , setCount] = useState(0);
    const [disableButton , setDisableButton] = useState(false)

    async function fetchProducts()
    {
        try {
            
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
            // when count will be one we will skip 20 data when count will become 2 we will skip 40 data and so on

            const result = await response.json();
            // console.log(result);

            if(result && result.products && result.products.length)
            {
                // setProducts(result.products);
                setProducts((prevData) => [...prevData , ...result.products]);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[count]);

    useEffect(()=>{
        if(products && products.length === 100)
        {
            setDisableButton(true);
        }
    }, [products]);

    if(loading)
    {
        return <div>Loading data please wait ! </div>
    }

    return <div className="load-more-container">
        <div className='product-container'>
            {
                products && products.length ? 
                    products.map(item => 
                    <div className='product' key={item.id}>
                        <img src={item.thumbnail} alt={item.title}></img>
                        <p>{item.title}</p>
                    </div>)
                :null
            }
        </div>
        <div className='button-container'>
            <button  disabled={disableButton} onClick={() => setCount(count + 1)}>
                Load More Products
            </button>
            {
                disableButton ? <p>Reached 100 products</p> :null
            }
        </div>
    </div> 
}