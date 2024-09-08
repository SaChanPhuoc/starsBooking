import React from "react";
import "../css/style.css";
import blogimg_1 from "../img/blog/blog-1.jpg";
import blogimg_2 from "../img/blog/blog-2.jpg";
import blogimg_3 from "../img/blog/blog-3.jpg";
import blogimg_4 from "../img/blog/blog-4.jpg";
import blogimg_5 from "../img/blog/blog-5.jpg";
import blogimg_6 from "../img/blog/blog-6.jpg";
import blogimg_7 from "../img/blog/blog-7.jpg";
import blogimg_8 from "../img/blog/blog-8.jpg";

const componentBlog = () => {
    return (
        <>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>Blog</h2>
                                <div className="bt-option">
                                    <a href="./home.html">Trang chủ</a>
                                    <span>Danh sách Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog-section blog-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-1.jpg" style={{ backgroundImage: `url(${blogimg_1})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Chuyến đi du lịch</span>
                                    <h4><a href="./blog-details.html">Tremblant tại Canada</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 15 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-2.jpg" style={{ backgroundImage: `url(${blogimg_2})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Cắm trại</span>
                                    <h4><a href="./blog-details.html">Chọn một chiếc Caravan cố định</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 15 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-3.jpg" style={{ backgroundImage: `url(${blogimg_3})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Sự kiện</span>
                                    <h4><a href="./blog-details.html">Hẻm núi Copper</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 21 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-4.jpg" style={{ backgroundImage: `url(${blogimg_4})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Trivago</span>
                                    <h4><a href="./blog-details.html">Một bưu thiếp du hành thời gian</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 22 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-5.jpg" style={{ backgroundImage: `url(${blogimg_5})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Cắm trại</span>
                                    <h4><a href="./blog-details.html">Một bưu thiếp du hành thời gian</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 25 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-6.jpg" style={{ backgroundImage: `url(${blogimg_6})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Chuyến đi du lịch</span>
                                    <h4><a href="./blog-details.html">Du lịch Virginia cho trẻ em</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 28 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-7.jpg" style={{ backgroundImage: `url(${blogimg_7})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Chuyến đi du lịch</span>
                                    <h4><a href="./blog-details.html">Hẻm núi Bryce tuyệt đẹp</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 29 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-8.jpg" style={{ backgroundImage: `url(${blogimg_8})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Sự kiện & Du lịch</span>
                                    <h4><a href="./blog-details.html">Nhà lưu động hay Rơ-moóc</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 30 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item set-bg" data-setbg="img/blog/blog-9.jpg" style={{ backgroundImage: `url(${blogimg_8})` }}>
                                <div className="bi-text">
                                    <span className="b-tag">Cắm trại</span>
                                    <h4><a href="./blog-details.html">Lạc lối tại Lagos, Bồ Đào Nha</a></h4>
                                    <div className="b-time"><i className="icon_clock_alt"></i> 30 tháng 4, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="load-more">
                                <a href="/#" className="primary-btn" style={{textDecoration: "none"}}>Tải thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default componentBlog;
