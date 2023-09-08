import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Brandslider = () => {
    const [brand, Setbrand] = useState([]);

    const getSlid2 = async () => {
        try {
            const response = await fetch("https://vsmart.ajspire.com/api/brands");
            console.log(response);
            const data = await response.json();
            Setbrand(data.brands);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getSlid2();
    }, []);

    return (
        <div>
            <section className="" style={{ marginTop: "120px", background: "None" }}>
                <div className="container">
                    <Carousel interval={1000}>
                        {brand.map((category, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex justify-content-around">
                                    {brand.slice(index, index + 5).map((item) => (
                                        <div key={item.category_id} className="suggest-card shadow my-2 rounded-bottom-5">
                                           {/* <Link to={'/product-shop/:brand_id'} className="text-center text-bg-dark mt-12">{item.brand_name}</Link> */}
                                           <Link to={`/product-shop/${item.brand_id}`} style={{color:'black'}}>
                                    {item.brand_name}
                                    </Link>
                                            <div>
                                            <Link to={`/product-shop/${item.brand_id}`}>
                                                <img
                                                    className="rounded-pill"
                                                    style={{ width: 200, height: 200 }}
                                                    src={item.brand_banner}
                                                    alt=""
                                                />
                                                
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    );
}

export default Brandslider;
