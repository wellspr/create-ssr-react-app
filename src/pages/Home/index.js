import "./index.css";

// React
import React from "react";

// Redux
// import { connect } from "react-redux";

// Local imports

import { Helmet } from "react-helmet";

const head  = () => {
    return (
        <Helmet>
            <title>Home</title>
            <meta property="og:title" content="Home" />
        </Helmet>
    );
};

const Home = () => {

    const renderHomePage = () => {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-100">

                <h1>Everything's Ok!</h1>

                <p>Start editing a new cool app.</p>

            </div>
        );
    };

    return <>
        { head() }
        { renderHomePage() }
    </>
};

// const mapStateToProps = state => {
//     return {};
// };

// const loadData = store => {
//     return store.dispatch(fetchPosts());
// };

export default {
    // loadData,
    // component: connect(mapStateToProps, { fetchPosts })(Home)
    component: Home
};