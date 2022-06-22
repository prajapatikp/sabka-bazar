import React, { useEffect, useState } from "react";
import '../sass/product.scss'

const Product = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [productsFilter, setProductsFilter] = useState([])

    useEffect(() => {
        fetch("/response-json/categories.json").then((response) => {
            return response.json();
        }).then((data) => {
            setCategories(data)
        })
    }, [])

    useEffect(() => {
        fetch("/response-json/product.json").then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data)
            setProductsFilter(data)
        })
    }, [])

    function filterProducts(event) {
        let category = categories.filter((item) => item.name === event.target.innerHTML)
        let filtedproducts = products.filter((product) => product.category === category[0].type)
        setProductsFilter(filtedproducts)
    }

    function getMenus() {
        let arr = []
        categories.forEach(category => {
            arr.push(
                <li tabIndex={0} key={category.type} aria-label={category.name + 'menu'} className="product__sidemenu__categories-item" onClick={filterProducts}>{category.name}</li>
            )
        })
        return arr;
    }

    function getProducts() {
        let arr = []
        productsFilter.forEach(product => {
            arr.push(
                <div tabIndex={0} aria-label={product.name} className="product__list-item col-lg-3 col-sm-4">
                    <label className="product__list-item-name">{product.name}</label>
                    <img className="product__list-item-image" alt="product item" src={product.imageURL} />
                    <label className="product__list-item-description">{product.description}</label>
                    <div className="product__list-item-bottom">
                        <label aria-label={'Product price is '+ product.price} className="product__list-item-bottom-price">MRP Rs.{product.price}</label>
                        <button tabIndex={0} className="product__list-item-bottom-buy">Buy Now</button>
                    </div>
                </div>
            )
        });
        return arr;
    }

    return (
        <div className="product">
            <div className="product__sidemenu">
                <ul aria-label="categories filter side menus" className="product__sidemenu__categories">
                    {getMenus()}
                </ul>
            </div>
            <div aria-label="All products" className="product__list col-12">
                {getProducts()}
            </div>
        </div>
    )
}

export default Product