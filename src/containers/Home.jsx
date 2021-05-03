import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../Hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
    const [videos, categories] = useInitialState(API);
    return (
        <>
            <Search />
            {categories.map((category) => (
                videos[category].length > 0 && (
                    <Categories key={Math.random()} title={category}>
                        <Carousel>
                            {videos[category].map((item) => (
                                <CarouselItem key={item.id} {...item}/>
                            ))}
                        </Carousel>
                    </Categories>
                )))}
        </>
    );
};

export default Home;
// const mapStateToProps = state => {
//     return {
//         myList: state.myList,
//         trends: state.trends,
//         originals: state.originals
//     }
// }

// export default connect(mapStateToProps, null)(Home);
