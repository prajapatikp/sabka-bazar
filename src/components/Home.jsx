import React, { useEffect, useState } from "react";
import '../sass/home.scss'
import ImageSlider from "react-simple-image-slider";

const Home = () => {
    const [categories, setCategories] = useState([])
    const images = [
        { url: "/images/offers/offer1.jpg" },
        { url: "/images/offers/offer2.jpg" },
        { url: "/images/offers/offer3.jpg" },
        { url: "/images/offers/offer4.jpg" },
        { url: "/images/offers/offer5.jpg" },
    ];

    useEffect(() => {
        fetch("/response-json/categories.json").then((response) => {
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
                    <li key={category.type}>
                        <div aria-level={category.name} tabIndex={0} className="categories__item">
                            <img alt={category.name} className="categories__item-image" src={category.image}></img>
                            <div className="categories__item-right">
                                <h4 className="categories__item-name">{category.name}</h4>
                                <label className="categories__item-description">{category.description}</label>
                                <br /><button tabIndex={0} className="categories__item-button" type="submit">{category.buttontext}</button>
                            </div>
                        </div>
                    </li>
                )
            } else {
                arr.push(
                    <li>
                        <div aria-level={category.name} tabIndex={0} className="categories__item">
                            <div className="categories__item-right">
                                <h4 className="categories__item-name">{category.name}</h4>
                                <label className="categories__item-description">{category.description}</label>
                                <br /><button tabIndex={0} className="categories__item-button" type="submit">{category.buttontext}</button>
                            </div>
                            <img alt={category.name} className="categories__item-image" src={category.image}></img>
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
            <div className="carosel">
                <ImageSlider
                    autoPlay={true}
                    width={1024}
                    height={250}
                    images={images}
                    showBullets={true}
                    showNavs={true} />
            </div>
            <ul aria-label="categories list" className="categories">
                {getProductCategories()}
            </ul>
        </>
    )
}

export default Home