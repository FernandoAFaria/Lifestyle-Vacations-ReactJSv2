import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing-Page/Landing";
import Resort from './components/Resorts/Resort';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Book from './components/Book';


export default class App extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        };
    }
    render() {
        return (
            <div style={{overflowX: 'hidden'}}>
            <BrowserRouter>
                <Navbar />  
                    <Route exact path="/" component={Landing} />
                    <Route exact path='/book' component={Book} />
                    <Route path="/resorts/:id" component={Resort}/>
                </BrowserRouter>
                </div>
        );
    }
}
