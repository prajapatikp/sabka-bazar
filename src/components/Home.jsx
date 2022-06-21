import React, { useEffect, useState } from "react";
import '../sass/home.scss'

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories.json").then((response) => {
            return response.json();
        }).then((data) => {
            setCategories(data)
        })
    }, [])

    function getProductCategories() {
        let arr = []
        let imageLeft = true
        categories.forEach(category => {
            if (imageLeft) {
                arr.push(
                    <li>
                        <div className="categories__item">
                            <img className="categories__item-image" src={category.image}></img>
                            <div className="categories__item-right">
                                <h4 className="categories__item-name">{category.name}</h4>
                                <label className="categories__item-description">{category.description}</label>
                                <br /><button className="categories__item-button" type="submit">{category.buttontext}</button>
                            </div>
                        </div>
                    </li>
                )
            } else {
                arr.push(
                    <li>
                        <div className="categories__item">
                            <div className="categories__item-right">
                                <h4 className="categories__item-name">{category.name}</h4>
                                <label className="categories__item-description">{category.description}</label>
                                <br /><button className="categories__item-button" type="submit">{category.buttontext}</button>
                            </div>
                            <img className="categories__item-image" src={category.image}></img>
                        </div>
                    </li>
                )
            }
            imageLeft = !imageLeft;
        });
        return arr;
    }

    return (
        <>
            <ul className="categories">
                {getProductCategories()}
            </ul>
        </>
    )
}

export default Home