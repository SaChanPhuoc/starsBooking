import React from "react";
import Herder from "../component/header";
import Footer from "../component/footer";
import ComponentBanner from "../component/banner";
import ComponentAboutUsIndex from "../component/aboutus_index";
import ComponentAddressIndex from "../component/addressIndex";
import ComponentDiscoverIndex from "../component/discoverIndex";

const PageHome = () => {
    return (
        <>
            <Herder/>
            <ComponentBanner/>
            <ComponentAboutUsIndex />
            <ComponentAddressIndex/>
            <ComponentDiscoverIndex/>
            <Footer/>
        </>
    )
}

export default PageHome;