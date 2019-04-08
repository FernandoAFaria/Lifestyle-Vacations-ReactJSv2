import React, { Component } from "react";


export default class CallToAction extends Component {

    // changeBack() {
    //     let opacity = Math.ceil(window.pageYOffset / 100.6);

    //     let blackOverlay = document.querySelector(".black");
    //     blackOverlay.style.opacity = `.${opacity}`;
    //     console.log(opacity)
        
    // }
   
  
    componentDidMount() {
        // window.addEventListener("scroll", this.changeBack);
        window.scrollTo(0,0);
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.changeBack)
    }

    render() {
        return (
            <section id='home' className="landing-page-section">
                <div className="slant landing-background">
                    <div className="black" />
                </div>
                <div className="container flex-center landing-text">
                    <h1>All inclusive affordable vacation packages!</h1>
                    <a href="#resorts" className="browse-btn browse-link">Browse Resorts</a>
                </div>
                {/* <i className="fas fa-angle-double-down" /> */}
            </section>
        );
    }
}
