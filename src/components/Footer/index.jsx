import React from 'react';
import './index.css'

export default function Footer() {
    return (
        <div className='mt-5 mb-5 footer-container'>
            <div className='row'>
                <div className='col-sm-6 mt-lg-5'>
                    <ul className='list-unstyled'>
                        <li>
                            <p>
                                <big>Đơn vị: CÔNG TY TNHH CHẾ BIỂN VÀ CUNG CẤP THỰC PHẨM HỒNG DỰ</big>
                            </p>
                        </li>
                        <li>
                            <p>
                                <big>Địa chỉ: Số nhà 26, thôn Hoàng Trung, xã Hồng Dương, huyện Thanh Oai, Thành phố Hà Nội</big>
                            </p>
                        </li>
                        <li>
                            <p>
                                <big>Số điện thoại: 0983.448.889</big>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.496072733129!2d105.78858844149197!3d21.006503277922562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca62c4c5ae1%3A0xb46834d6290612b5!2sOYO%201158%20Ngoc%20Trai%20hotel!5e0!3m2!1svi!2s!4v1689815966129!5m2!1svi!2s"
                        className='map'
                        style={{ border: '0' }}
                        loading='lazy'></iframe>
                </div>
            </div>
        </div>
    );
}