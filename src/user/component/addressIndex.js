import React from "react";
import "../css/style.css";
import img from "../img/city/VungTau/vt1.jpg";
import imgVN from "../img/vietnam.png";

const ComponentAddressIndex = () => {
    return (
        <>
            <section className="trending-destinations">
                <div className="container">
                    <div className="section-title">
                        <h2 style={{ fontSize: '28px', fontWeight: 'bolder' }}>Điểm Đến Đang Thịnh Hành</h2>
                        <p>Du khách tìm kiếm về Việt Nam cũng đặt chỗ tại những nơi này</p>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <div className="custom-card destination-box">
                                <img src={img} className="card-img-top" alt="Vũng Tàu" />
                                <div className="destination-title">Vũng Tàu <img src={imgVN} alt="" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="custom-card destination-box">
                                <img src={img} className="card-img-top" alt="TP. Hồ Chí Minh" />
                                <div className="destination-title">TP. Hồ Chí Minh <img src={imgVN} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="custom-card destination-box">
                                <img src={img} className="card-img-top" alt="Đà Nẵng" />
                                <div className="destination-title">Đà Nẵng <img src={imgVN} alt="" /></div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="custom-card destination-box">
                                <img src={img} className="card-img-top" alt="Nha Trang" />
                                <div className="destination-title">Nha Trang <img src={imgVN} alt="" /></div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="custom-card destination-box">
                                <img src={img} className="card-img-top" alt="Đà Lạt" />
                                <div className="destination-title">Đà Lạt <img src={imgVN} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponentAddressIndex;