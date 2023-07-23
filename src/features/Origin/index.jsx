import React from 'react';
import { CertificateSlide } from './SlideImage/Certificate';
import { PublicationSlide } from './SlideImage/Publication';

export const OriginPage = () => {
    return (
        <div className="page-container container-fluid">
            <div className='row'>
                <div className="mt-md-4 mb-md-5">
                    <h3 className='mt-4 mb-4'>Xuất xứ</h3>
                </div>
                <div className="col-xl-12 mb-5">
                    <h5>THÔNG TIN NHÀ SẢN XUẤT</h5>
                    <div className="item">
                        <div className="icon">
                            <i class="bi bi-info-circle-fill"></i>
                        </div>
                        <div className="icon">Đơn vị: CÔNG TY TNHH CHẾ BIẾN VÀ CUNG CẤP THỰC PHẨM PHẠM HỒNG DỰ</div>
                    </div>
                    <div className="item">
                        <div className="icon"><i class="bi bi-geo-alt-fill"></i></div>

                        <div className="icon">Địa chỉ: Số nhà 26, thôn Hoàng Trung, xã Hồng Dương, huyện Thanh Oai, Thành phố Hà Nội</div>
                    </div>
                    <div className="item">
                        <div className="icon"><i class="bi bi-telephone-fill"></i></div>
                        <div className="icon">Số điện thoại: 0983.448.889</div>
                    </div>
                    <div className='iframe-rwd'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.7733957295236!2d105.78631870000001!3d20.8004535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b5214ee7776f%3A0x9717a9a2ebfdea74!2zVGjDtG4gSG_DoG5nIFRydW5nLCB4w6MgSOG7k25nIETGsMahbmcsIFRoYW5oIG9haSBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1690085986014!5m2!1svi!2s"
                            style={{width:'100%', height:'300px', border:0}}
                        ></iframe>
                    </div>
                </div>
                <div className="col-xl-12 mb-5">
                    <h5>CHỨNG CHỈ CHỨNG NHẬN</h5>
                    <CertificateSlide />
                    <PublicationSlide />

                </div>
            </div>

        </div>
    )
}