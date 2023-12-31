import React from 'react';
import "./index.css"
import { SlideImage } from '../../components/SlideImage';

const ProductPage = () => {
    return (
        <div className="page-container container-fluid mt-sm-5">
            <div className="row">
                <h1 className="mb-5 mt-5 text-center">CÔNG TY TNHH CHẾ BIẾN VÀ CUNG CẤP THỰC PHẨM PHẠM HỒNG DỰ</h1>
                <SlideImage/>
                <div className="col-sm-12 mb-5 mt-4">
                    <h3>THÔNG TIN SẢN PHẨM</h3>
                    <div>
                        <div className="item">
                            <div className="icon">
                                <i class="bi bi-info-circle-fill"></i>
                            </div>
                            <div className="icon">Tên sản phẩm: Giò chả</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 mb-5">
                    <h3>NGUỒN GỐC XUẤT XỨ</h3>
                    <div>
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
                </div>
                <div className="col-sm-12 mb-5">
                    <h3>THỜI HẠN SỬ DỤNG VÀ QUY CÁCH SẢN PHẨM</h3>
                    <div>
                        <div className="item">
                            <div className="icon"><i class="bi bi-calendar2-week-fill"></i></div>
                            <div className="icon">Thời hạn sử dụng: Ghi trên bao bì</div>
                        </div>
                        <div className="item">
                            <div className="icon"><i class="bi bi-box2-fill"></i></div>
                            <div className="icon">Quy cách đóng gói: Túi nilon/thùng sọt chuyên dụng</div>
                        </div>
                        <div className="item">
                            <div className="icon"><i class="bi bi-speedometer"></i></div>
                            <div className="icon">Trọng lượng: Đóng gói theo yêu cầu của khách hàng</div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-12 mb-5">
                    <h3>HƯỚNG DẪN CHẾ BIẾN VÀ BẢO QUẢN</h3>
                    <div>
                        <div className="item col--9">
                            <div className="icon"><i class="bi bi-1-circle-fill"></i></div>
                            <div className="icon">Chế biến theo từng món ăn yêu cầu</div>
                        </div>
                        <div className="item col--9">
                            <div className="icon"><i class="bi bi-2-circle-fill"></i></div>
                            <div className="icon">Bảo quản ngăn đông đá tủ lạnh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage 