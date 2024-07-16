import React from 'react';

function Home(props){
    const { response } = props;

    
    if (!response || !response.products || response.products.length === 0) {
        return <p>Loading...</p>; 
    }

    return (
        <div>
            <h1>All Products</h1>
            {response.products.map((d) => (
                <div className='product' key={d.productName}>
                    <h2>{d.price}</h2>
                    <h2>{d.rating}</h2>
                    <h2>{d.availability}</h2>
                </div>
            ))}
        </div>
    );
}

export default Home;

