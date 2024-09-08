import React from "react";
import Herder from "../component/header";
import Footer from "../component/footer";
import ComponentBlog from "../component/blog";

const pageBlog = () => {
    return(
        <>
        <Herder />
        <ComponentBlog />
        <Footer />
        </>
    )
}

export default pageBlog;