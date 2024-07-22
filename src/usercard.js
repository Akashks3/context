import React, { useContext } from 'react';
import { UserContext } from './usercontext';
const ShowComponent = () => {
    const {
        filterCourseFunction,
        addCourseToCartFunction,
    } = useContext(UserContext);

    return (
        <div className="App">
            <main className="App-main">
                <div className="product-list">
                    {filterCourseFunction.length === 0 ? (
                        <p className="no-results">No matching Product found.</p>
                    ) : (
                        filterCourseFunction.map((product) => (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h2>{product.name}</h2>
                                <p>Price: ₹{product.price}</p>
                                <button
                                    className="add-to-cart-button"
                                    onClick={() => addCourseToCartFunction(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default ShowComponent;
