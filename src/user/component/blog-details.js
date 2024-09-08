import React from "react";
import "../css/style.css"
import hero from "../img/blog/blog-details/blog-details-hero.jpg"
import img1 from "../img/blog/blog-details/blog-details-1.jpg"
import avt from "../img/blog/blog-details/avatar/avatar-1.jpg"
import blog from "../img/blog/blog-1.jpg"

const componentDetails = () => {
    return (
        <>
        <section className="blog-details-hero set-bg" data-setbg="img/blog/blog-details/blog-details-hero.jpg" style={{ backgroundImage: `url(${hero})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="bd-hero-text">
                        <span>Chuyến Du Lịch & Cắm Trại</span>
                        <h2>CDC Phát Hành Cảnh Báo Sức Khỏe Cho Du Khách Đến Việt Nam</h2>
                        <ul>
                            <li className="b-time"><i className="icon_clock_alt"></i> 15 Tháng Tư, 2019</li>
                            <li><i className="icon_profile"></i> Kerry Jones</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog-details-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="blog-details-text">
                        <div className="bd-title">
                            <p>Bạn có nghĩ về việc phiêu lưu du lịch? Bạn đã cân nhắc những nơi tốt nhất để đi khi nói về phiêu lưu du lịch chưa? Vịnh Hạ Long là một trong những địa điểm phổ biến nhất. Khi bạn đến quốc gia kỳ diệu này, bạn sẽ có những cuộc phiêu lưu tuyệt vời ngay trước mắt. Chỉ có du lịch phiêu lưu tại Vịnh Hạ Long mới mang lại cho bạn những cơ hội này, vì vậy nếu nó chưa có trong danh sách các địa điểm có thể tham quan của bạn thì bây giờ là lúc để đưa nó vào!</p>
                            <p>Ở Vịnh Hạ Long, cuộc phiêu lưu du lịch của bạn sẽ trở nên hấp dẫn. Bạn sẽ được thấy vùng biển tại đó và trải nghiệm tất cả những gì văn hóa phong phú của Vịnh Hạ Long mang lại. Người dân Vịnh Hạ Long là những người tuyệt vời, họ đã giữ gìn được văn hóa và niềm tin của mình lâu hơn hầu hết các quốc gia khác. Khi du lịch phiêu lưu đưa bạn đến Vịnh Hạ Long, bạn sẽ có cơ hội thấy tất cả những hồ và rừng độc đáo, bạn thậm chí có thể lên đên trên biển với hướng dẫn viên chuyên nghiệp. Và những thác nước ở Vịnh Hạ Long thật tuyệt vời, bạn sẽ không bao giờ thấy điều gì đẹp hơn trong cuộc đời như những thác nước của họ! Đây chắc chắn nên là địa điểm hàng đầu trong danh sách điểm đến du lịch phiêu lưu của bạn!</p>
                        </div>
                        <div className="bd-pic">
                            <div className="bp-item">
                                <img src={img1} alt="" />
                            </div>
                            <div className="bp-item">
                            <img src={img1} alt="" />
                            </div>
                            <div className="bp-item">
                            <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className="bd-more-text">
                            <div className="bm-item">
                                <h4>Nếu bạn sống ở Thành phố Cần Thơ</h4>
                                <p>Bạn biết tất cả về giao thông ở đó. Di chuyển là điều gần như không thể, ngay cả khi có hàng triệu chiếc taxi màu vàng. Nếu bạn giống như tôi, bạn thường nhìn những chiếc limousine bóng loáng với tài xế mặc đồng phục và ước rằng mình có thể ngồi trong một chiếc. Vâng, bạn có thể. Dịch vụ limousine ở Cần Thơ có giá cả phải chăng hơn bạn nghĩ.</p>
                            </div>
                            <div className="bm-item">
                                <h4>Mỗi khi tôi bắt một chiếc taxi ở Thành phố Cần Thơ</h4>
                                <p>Tôi hy vọng rằng mình sẽ gặp may mắn khi có được một chiếc taxi nửa chừng và tài xế thực sự nói tiếng Anh. Tôi đã trải qua nhiều khoảnh khắc lo lắng không biết liệu tôi có đến đích hay không. Hoặc liệu tôi có bị chém giá không. Ngay cả khi mọi thứ diễn ra tốt đẹp, tôi không thể nói rằng tôi nhớ nhiều chuyến đi taxi ở Cần Thơ thực sự dễ chịu. Và với giá cả hiện nay, đi limousine càng ngày càng hợp lý hơn.</p>
                            </div>
                        </div>
                        <div className="tag-share">
                            <div className="tags">
                                <a href="#">Du Lịch</a>
                                <a href="#">Cắm Trại</a>
                                <a href="#">Sự Kiện</a>
                            </div>
                            <div className="social-share">
                                <span>Chia sẻ:</span>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-tripadvisor"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                        <div className="comment-option">
                            <h4>2 Bình Luận</h4>
                            <div className="single-comment-item first-comment">
                                <div className="sc-author">
                                    <img src={avt} alt="" />
                                </div>
                                <div className="sc-text">
                                    <span>27 Tháng Tám 2019</span>
                                    <h5>Brandon Kelley</h5>
                                    <p>Không có ai ghét điều gì, vì nó làm họ đau đớn, hoặc tìm kiếm nó bởi vì đó là đau khổ của chính họ.</p>
                                    <a href="#" className="comment-btn">Thích</a>
                                    <a href="#" className="comment-btn">Phản hồi</a>
                                </div>
                            </div>
                            <div className="single-comment-item reply-comment">
                                <div className="sc-author">
                                <img src={avt} alt="" />
                                </div>
                                <div className="sc-text">
                                    <span>27 Tháng Tám 2019</span>
                                    <h5>Brandon Kelley</h5>
                                    <p>Không có ai ghét điều gì, vì nó làm họ đau đớn, hoặc tìm kiếm nó bởi vì đó là đau khổ của chính họ.</p>
                                    <a href="#" className="comment-btn like-btn">Thích</a>
                                    <a href="#" className="comment-btn reply-btn">Phản hồi</a>
                                </div>
                            </div>
                            <div className="single-comment-item second-comment ">
                                <div className="sc-author">
                                <img src={avt} alt="" />
                                </div>
                                <div className="sc-text">
                                    <span>27 Tháng Tám 2019</span>
                                    <h5>Brandon Kelley</h5>
                                    <p>Không có ai ghét điều gì, vì nó làm họ đau đớn, hoặc tìm kiếm nó bởi vì đó là đau khổ của chính họ.</p>
                                    <a href="#" className="comment-btn">Thích</a>
                                    <a href="#" className="comment-btn">Phản hồi</a>
                                </div>
                            </div>
                        </div>
                        <div className="leave-comment">
                            <h4>Để Lại Bình Luận</h4>
                            <form action="#" className="comment-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Tên" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <input type="text" placeholder="Website" />
                                        <textarea placeholder="Lời nhắn"></textarea>
                                        <button type="submit" className="site-btn">Gửi Lời Nhắn</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="recommend-blog-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Đề Xuất</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-item set-bg" data-setbg="img/blog/blog-1.jpg" style={{ backgroundImage: `url(${blog})` }}>
                        <div className="bi-text">
                            <span className="b-tag">Du Lịch</span>
                            <h4><a href="#">Tremblant Ở Canada</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 15 Tháng Tư, 2019</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-item set-bg" data-setbg="img/blog/blog-2.jpg" style={{ backgroundImage: `url(${blog})` }}>
                        <div className="bi-text">
                            <span className="b-tag">Cắm Trại</span>
                            <h4><a href="#">Lựa Chọn Một Nhà Xe Cố Định</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 15 Tháng Tư, 2019</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog-item set-bg" data-setbg="img/blog/blog-3.jpg" style={{ backgroundImage: `url(${blog})` }}>
                        <div className="bi-text">
                            <span className="b-tag">Sự Kiện</span>
                            <h4><a href="#">Hẻm Núi Copper</a></h4>
                            <div className="b-time"><i className="icon_clock_alt"></i> 21 Tháng Tư, 2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default componentDetails;
