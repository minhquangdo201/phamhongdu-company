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