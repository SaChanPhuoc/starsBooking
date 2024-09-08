import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
// import "../css/carousel.css"
// import "../css/bootstrap.min.css"
// import "../css/elegant-icons.css"
// import "../css/flaticon.css"
// import "../css/font-awesome.min.css"
// import "../css/jquery-ui.min.css"
// import "../css/magnific-popup.css"
// import "../css/slicknav.min.css"
import about_1 from "../img/about/about-1.jpg";
import Herder from "./component/header";
import Footer from "./component/footer";

const about_Us = () => {
    return (
        <>
            <Herder />
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>Về Chúng Tôi</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Trang Chủ</a>
                                    <span>Về Chúng Tôi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="aboutus-page-section spad">
                <div className="container">
                    <div className="about-page-text">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ap-title">
                                    <h2>Chào Mừng Đến Với Sona.</h2>
                                    <p>Được xây dựng vào năm 1910 trong thời kỳ Belle Epoque, khách sạn này nằm ở trung tâm Paris, với
                                        dễ dàng tiếp cận các điểm du lịch của thành phố. Nó cung cấp các phòng được trang trí tinh tế.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <ul className="ap-services">
                                    <li><i className="icon_check"></i> Giảm 20% trên giá phòng.</li>
                                    <li><i className="icon_check"></i> Bữa sáng miễn phí hàng ngày.</li>
                                    <li><i className="icon_check"></i> 3 bộ đồ giặt mỗi ngày.</li>
                                    <li><i className="icon_check"></i> Wifi miễn phí.</li>
                                    <li><i className="icon_check"></i> Giảm 20% trên thực phẩm và đồ uống.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-page-services">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="ap-service-item set-bg" data-setbg={about_1} style={{ backgroundImage: `url(${about_1})` }}>
                                    <div className="api-text">
                                        <h3>Dịch Vụ Nhà Hàng</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ap-service-item set-bg" data-setbg={about_1} style={{ backgroundImage: `url(${about_1})` }}>
                                    <div className="api-text">
                                        <h3>Du Lịch & Cắm Trại</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ap-service-item set-bg" data-setbg="../img/about/about-p3.jpg" style={{ backgroundImage: `url(${about_1})` }}>
                                    <div className="api-text">
                                        <h3>Sự Kiện & Tiệc Tùng</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-section set-bg" data-setbg="../img/video-bg.jpg" style={{ backgroundImage: `url(${about_1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="video-text">
                                <h2>Khám Phá Khách Sạn & Dịch Vụ Của Chúng Tôi.</h2>
                                <p>Mùa bão đã đến nhưng chúng tôi vẫn tham quan Hilton Head Island</p>
                                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup">
                                    <img src="../img/play.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Thư Viện Ảnh</span>
                                <h2>Khám Phá Công Việc Của Chúng Tôi</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="gallery-item set-bg" data-setbg="../img/gallery/gallery-1.jpg" style={{ backgroundImage: `url(${about_1})` }}>
                                <div className="gi-text">
                                    <h3>Phòng Sang Trọng</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="gallery-item set-bg" data-setbg="../img/gallery/gallery-3.jpg" style={{ backgroundImage: `url(${about_1})` }}>
                                        <div className="gi-text">
                                            <h3>Phòng Sang Trọng</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="gallery-item set-bg" data-setbg="../img/gallery/gallery-4.jpg" style={{ backgroundImage: `url(${about_1})` }}>
                                        <div className="gi-text">
                                            <h3>Phòng Sang Trọng</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gallery-item large-item set-bg" data-setbg="../img/gallery/gallery-2.jpg" style={{ backgroundImage: `url(${about_1})` }}>
                                <div className="gi-text">
                                    <h3>Phòng Sang Trọng</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default about_Us;
