import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-brand-slide">
          <div className="sect-smuse">
            <div>Chấp nhận thanh toán</div>
            <ul>
              <li>
                <img src="././img/momo.jpg" alt="" />
              </li>
              <li>
                <img src="././img/payment-mastercard.png" alt="" />
              </li>
              <li>
                <img src="././img/payment-visa.png" alt="" />
              </li>
              <li>
                <img src="././img/napas-40.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-policy">
          <div className="content-policy row">
            <div className="cgv-vietnam p-lg-0 col-12 col-lg-3 col-sm-6">
              <h3>Cinema Việt Nam</h3>
              <ul>
                <li>
                  <i className="fa-solid fa-angles-right"></i> Giới Thiệu
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Tiện Ích Online
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Thẻ Quà Tặng
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Tuyển Dụng
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Liên Hệ Quảng Cáo
                </li>
              </ul>
            </div>
            <div className="cgv-policy p-lg-0 col-12 col-lg-3 col-sm-6">
              <h3>Điều khoản sử dụng</h3>
              <ul>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Điều Khoản Chung
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Điều Khoản Giao Dịch
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Chính Sách Thanh Toán
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Chính Sách Bảo Mật
                </li>
                <li>
                   <i className="fa-solid fa-angles-right"></i> Câu Hỏi Thường Gặp
                </li>
              </ul>
            </div>
            <div className="follow-us p-lg-0 col-12 col-lg-3 col-sm-6">
              <h3>Kết nối với chúng tôi</h3>
              <div className="footer_social">
                <span><i className="fa-brands fa-facebook-f" /></span>
                <span><i className="fa-brands fa-linkedin-in" /></span>
                <span><i className="fa-brands fa-twitter" /></span>
                <span><i className="fa-brands fa-google-plus-g" /></span>
              </div>
            </div>
            <div className="customer-cgv p-lg-0 col-12 col-lg-3 col-sm-6">
              <h3>Chăm sóc khách hàng</h3>
              <ul>
                <li> <i className="fa-solid fa-angles-right"></i> Hotline: 1900 9999</li>
                <li> <i className="fa-solid fa-angles-right"></i> Giờ làm việc: 8:00 - 17:00</li>
                <li> <i className="fa-solid fa-angles-right"></i> Email hỗ trợ: hoidap@abc.vn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-address"></div>
      </div>
    </div>
  );
}
