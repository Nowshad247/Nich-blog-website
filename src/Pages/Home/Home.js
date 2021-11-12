import React from 'react';
import Featured from '../../Components/Featured/Featured';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import LatestArticles from '../../Components/LatestArricles/LatestArticles';
import Partnership from '../../Components/Partnership/Partnership';
import Products from '../../Components/Products/Products';
import Reviews from '../../Components/Reviews/Reviews';
import Subscribe from '../../Components/Subscribe/Subscribe';

const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <Featured></Featured>
            <Products></Products>
            <Reviews></Reviews>
            <LatestArticles></LatestArticles>
            <Partnership></Partnership>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;