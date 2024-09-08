import React from "react";

const Herder = () => {
    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="canvas-open">
                <i className="icon_menu"></i>
            </div>
            <div className="offcanvas-menu-wrapper">
                <div className="canvas-close">
                    <i className="icon_close"></i>
                </div>
                <div className="search-icon search-switch">
                    <i className="icon_search"></i>
                </div>
                <div className="header-configure-area">
                    <div className="language-option">
                        <img src="../img/flag.jpg" alt="" />
                        <span>VN <i className="fa fa-angle-down"></i></span>
                        <div className="flag-dropdown">
                            <ul>
                                <li><a href="/#">EN</a></li>
                                <li><a href="/#">FR</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="/#" className="bk-btn">Đặt Ngay</a>
                </div>
                <nav className="mainmenu mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Trang Chủ</a></li>
                        <li><a href="./rooms.html">Phòng</a></li>
                        <li><a href="./about-us.html">Về Chúng Tôi</a></li>
                        <li><a href="./pages.html">Trang</a>
                            <ul className="dropdown">
                                <li><a href="./room-details.html">Chi Tiết Phòng</a></li>
                                <li><a href="./blog-details.html">Chi Tiết Blog</a></li>
                                <li><a href="/#">Phòng Gia Đình</a></li>
                                <li><a href="/#">Phòng Cao Cấp</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Tin Tức</a></li>
                        <li><a href="./contact.html">Liên Hệ</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap"></div>
                <div className="top-social">
                    <a href="/#"><i className="fa fa-facebook"></i></a>
                    <a href="/#"><i className="fa fa-twitter"></i></a>
                    <a href="/#"><i className="fa fa-tripadvisor"></i></a>
                    <a href="/#"><i className="fa fa-instagram"></i></a>
                </div>
                <ul className="top-widget">
                    <li><i className="fa fa-phone"></i> (12) 345 67890</li>
                    <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
                </ul>
            </div>
            <header className="header-section header-normal">
                <div className="top-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tn-left">
                                    <li><i className="fa fa-phone"></i> (12) 345 67890</li>
                                    <li><i className="fa fa-envelope"></i> info.colorlib@gmail.com</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tn-right">
                                    <div className="top-social">
                                        <a href="/#"><i className="fa fa-facebook"></i></a>
                                        <a href="/#"><i className="fa fa-twitter"></i></a>
                                        <a href="/#"><i className="fa fa-tripadvisor"></i></a>
                                        <a href="/#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                    <a href="/#" className="bk-btn">Đặt Ngay</a>
                                    <div className="language-option">
                                        <img src="../img/flag.jpg" alt="" />
                                        <span>VN <i className="fa fa-angle-down"></i></span>
                                        <div className="flag-dropdown">
                                            <ul>
                                                <li><a href="/#">EN</a></li>
                                                <li><a href="/#">FR</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <a href="./index.html">
                                        <img src="/src/img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="nav-menu">
                                    <nav className="mainmenu">
                                        <ul>
                                            <li><a href="./index.html">Trang Chủ</a></li>
                                            <li><a href="./rooms.html">Phòng</a></li>
                                            <li className="active"><a href="./about-us.html">Về Chúng Tôi</a></li>
                                            <li><a href="./pages.html">Trang</a>
                                                <ul className="dropdown">
                                                    <li><a href="./room-details.html">Chi Tiết Phòng</a></li>
                                                    <li><a href="./blog-details.html">Chi Tiết Blog</a></li>
                                                    <li><a href="/#">Phòng Gia Đình</a></li>
                                                    <li><a href="/#">Phòng Cao Cấp</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="./blog.html">Tin Tức</a></li>
                                            <li><a href="./contact.html">Liên Hệ</a></li>
                                        </ul>
                                    </nav>
                                    <div className="nav-right search-switch">
                                        <i className="icon_search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Herder;
