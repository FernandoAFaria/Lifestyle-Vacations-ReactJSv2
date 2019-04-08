import React from "react";
import cus1 from "../../assets/imgs/customerPhotos/thumbnail.jpeg";
import cus2 from "../../assets/imgs/customerPhotos/thumbnail (1).jpeg";
import cus3 from "../../assets/imgs/customerPhotos/thumbnail (2).jpeg";
import cus5 from "../../assets/imgs/customerPhotos/thumbnail (4).jpeg";
import cus6 from "../../assets/imgs/customerPhotos/thumbnail (5).jpeg";
import cus8 from "../../assets/imgs/customerPhotos/thumbnail (7).jpeg";

export default class Testimonials extends React.Component {
    componentDidMount() {
        let visibleSlide = "slide1";
        let slide1 = document.querySelector(".slider-pg-1");
        let slide2 = document.querySelector(".slider-pg-2");
        document.getElementById("next-slide").addEventListener("click", () => {
            if (visibleSlide === "slide1") {
                slide1.style.left = "-100vw";
                slide2.style.left = "0";
                visibleSlide = "slide2";
            } else if (visibleSlide === "slide2") {
                slide1.style.left = "0";
                slide2.style.left = "100vw";
                visibleSlide = "slide1";
            }
        });
    }
    render() {
        return (
            <section className="testimonials">
                <h2>Check out some pictures from some of our customers!</h2>
                <div className="slider-container">
                    <i id="next-slide" class="fas fa-arrow-right right-arrow" />
                    <div className="slider-pg-1">
                        <img src={cus1} alt="customer photos" />
                        <img src={cus2} alt="customer photos" />
                        <img src={cus3} alt="customer photos" />
                    </div>
                    <div className="slider-pg-2">
                        <img src={cus5} alt="customer photos" />
                        <img src={cus6} alt="customer photos" />
                        <img src={cus8} alt="customer photos" />
                    </div>
                </div>
                <h4>Submit your pictures to admin@lifestyle-vacations.club!</h4>
            </section>
        );
    }
}
