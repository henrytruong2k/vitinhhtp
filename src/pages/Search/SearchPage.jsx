
import './SearchPage.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DynamicFeedSharpIcon from '@mui/icons-material/DynamicFeedSharp';
import { useState } from "react";


const SearchPage = () => {
    const [block, setBlock] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    return (
        <div className='body-new'>
            
            <div className='cate-top'>
                <div className='container-2019'>
                    <div className='current-cate-title'>
                        <h1 className='current-cate-text'>
                            Tìm Kiếm: 
                        </h1>
                        <span className='current-cate-span'>Tổng có 3 Sản Phẩm </span>
                    </div>
                </div>

            </div>
            <div className='cate-content'>
                <div className='cate-left'>
                    <div className='title'>
                    <div className='btn-title'>
                        <span className='s-title'>LỌC SẢN PHẨM</span>
                    </div>
                    </div>
                    <div className='p-filter-item'>
                         <span className='filter-title'> DANH MỤC TÌM THẤY </span>
                         <div className='filter-rulers'></div>
                        <div className='p-filter-list-value'>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="#" style={{
                                    color:'#212529',
                                    fontsize: '12px',
                                    
                                }} >
                                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 'small'}} />
                                Case - Vỏ máy tính - (1)
                                </Nav.Link>
                                <Nav.Link eventKey="link-1"style={{
                                    color:'#212529',
                                    fontsize: '12px',
                                    
                                }}>
                                    <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 'small'}} />
                                    Gian Hàng Thanh Lý - (2)
                                </Nav.Link>
                                <Nav.Link eventKey="link-2" style={{
                                    color:'#212529',
                                    fontsize: '12px',
                                    
                                }}>
                                    <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 'small'}} />
                                    Hàng Hiệu Cũ, Siêu Tiết Kiệm - (3)
                                </Nav.Link>
                                <Nav.Link eventKey="link-3" style={{
                                    color:'#212529',
                                    fontsize: '12px',
                                    
                                }}>
                                    <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 'small'}} />
                                    Thiết Bị Chơi Game Cũ - (1)
                                </Nav.Link>
                                <Nav.Link eventKey="link-4" style={{
                                    color:'#212529',
                                    fontsize: '12px',
                                    
                                }}>
                                    <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 'small'}} />
                                    Máy Chơi Game, Tay Game Cũ - (1)
                                </Nav.Link>

                            </Nav>
                        </div>
                    </div>

                    <div className='p-filter-item'>
                         <span className='filter-title'> HÃNG SẢN XUẤT </span>
                         <div className='filter-rulers'></div>
                        <div className='p-filter-list-value'>
                        <Form>
                            {[''].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-${type}`}
                            label={`ASUS ${type}`}/>

                            <Form.Check
                                
                                type={'checkbox'}
                                label={`LOGITECH ${type}`}
                                id={`default-${type}`}/>
                            <Form.Check
                                type={'checkbox'}
                                label={`TP-LINK ${type}`}
                                id={`default-${type}`}/>
                            <Form.Check                          
                                type={'checkbox'}
                                label={`DAREU ${type}`}
                                id={`default-${type}`}/> 


                            <Form.Check                
                                type={'checkbox'}
                                label={`AKKO ${type}`}
                                id={`default-${type}`}/>                                                               
                            </div>
                        ))}
                        </Form>
                        </div>
                    </div>

                    <div className='p-filter-item'>
                         <span className='filter-title'> KHOẢN GIÁ </span>
                         <div className='filter-rulers'></div>
                        <div className='p-filter-list-value p-filter-list-value-check-price'>
                        <Form>
                            {[''].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-${type}`}
                            label={`Dưới 1 triệu ${type}`}/>

                            <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-${type}`}
                            label={`1 triệu -4 triệu ${type}`}/>

                            <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-${type}`}
                            label={`4 triệu - 10 triệu ${type}`}/>

                            <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-${type}`}
                            label={`10 triệu - 20 triệu ${type}`}/>

                            <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-${type}`}
                            label={`Trên 20 triệu ${type}`}/>
                                                             
                            </div>
                        ))}
                        </Form>

                        <div className='slider-range'>
                            <div className='ui-slider-range ui-corner-all ui-widget-header'>
                                <div className ='button-slider-l'></div>
                                <div className ='button-slider-r'></div>
                            </div>

                        </div>
                        <div className='input-price-filter'>
                            <p>
                            Từ
                                <input type="text" id='input-min-price-filter'  min="0" />
                           </p>
                           <p>
                            Đến
                                <input type="text" id='input-max-price-filter'  min="0" />
                           </p>
                        </div>
                        <div className='info-finter-price'>
                            <button className='btn-search' id='btn-finter-search'>Lọc</button>

                        </div>
                    </div>
                    </div>
                </div>
                <div className='cate-right'>
                    <div className='cate-product-list'>
                        <div className='cate-prod-top'>
                            <div className='sort-zone new-sort-zone'>
                                <div className='box-sort'>
                                <select className="list-sort" 
                                        id="page-selector" 
                                        onChange={(e) => window.location.href = e.target.value}>
                                        <option value="#">Tình trạng kho hàng</option>
                                        <option value="#">Còn hàng </option>
                                       
                                </select>
                                <select className="list-sort" 
                                        id="js-sort-store" 
                                        onChange={(e) => window.location.href = e.target.value}>
                                        <option value="#">Tất cả kho hàng</option>
                                        <option value="#">131 Lê Thạnh Nghị - Hai Bà Trưng - Hà Nội</option>
                                        <option value="#">45 Thái Hà - Đống Đa - Hà Nội</option>
                                        <option value="#">406 Tô Hiệu - Lê Chân - Hải Phòng</option>
                                        <option value="#">79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội</option>
                                        <option value="#">511 Quang Trung - Hà Đông - Hà Nội</option>
                                        <option value="#">478 Cách Mạng tháng Tám - Quận 3 - HCMC</option>
                                        <option value="#">622 Nguyễn Văn Cừ - Long Biên - Hà Nội</option>
                                        <option value="#">299 Minh Khai - Từ Sơn - Bắc Ninh</option>
                                        <option value="#">CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội</option>
                                        <option value="#">35 Cao lỗ - Đông Anh - Hà Nội</option>
                                        <option value="#">356 Nguyễn Thị Minh Khai - Dĩnh Khê - Bắc Giang</option>
                                        <option value="#">57 Trần Phú - Hà Đông - Hà Nội</option>
                                        <option value="#">145B Trường Chinh - Phú Lý - Hà Nam</option>
                                        <option value="#">99 Lê Lợi - TP. Vinh - Nghệ An</option>
                                        <option value="#">118 Lương Ngọc Quyến - Quang Trung - Thái Nguyên</option>
                                        <option value="#">164 Lạc Long Quân - Đông Vệ - Thanh Hoá</option>

                                </select>

                                <select className="list-sort" 
                                        id="page-selector" 
                                        onChange={(e) => window.location.href = e.target.value}>
                                        <option value="#">Tình trạng kho hàng</option>
                                        <option value="#">Còn hàng </option>
                                       
                                </select>                                                   
                                </div>
                                <div className="paging">
                                    <a href="/tim?q=+" className="current">
                                        1
                                    </a>
                                    <a href="/tim?q=+&amp;page=2">
                                        2
                                    </a>
                                    <a href="/tim?q=+&amp;page=3">
                                        3
                                    </a>
                                    <a href="/tim?q=+&amp;page=4">
                                        4
                                    </a>
                                    <a href="/tim?q=+&amp;page=5">
                                        5
                                    </a>
                                    <a href="/tim?q=+&amp;page=6">
                                        6
                                    </a>
                                    <a href="/tim?q=+&amp;page=7">
                                        7
                                    </a>
                                    <a href="/tim?q=+&amp;page=2">
                                    <ChevronRightSharpIcon 
                                        fontSize="small"
                                    ></ChevronRightSharpIcon>
                                    </a>
                            
                        </div>
                            </div>

                        </div>
                        <div className='cate-prod-bottom cate-list-prod'>
                            <div className='p-component item loaded attr-loaded'>
                            <a href="/cai-dat-he-dieu-hanh-may-tinh-van-phong">
                            <div className='p-img ajax-loading ajax-finished'>
                                <a href="/cai-dat-he-dieu-hanh-may-tinh-van-phong"></a>
                                <div className="a" 
                                    onMouseEnter={() => setBlock(true)}
                                    onMouseLeave={() => setBlock(false)}
                                    onMouseMove={(event) =>{
                                        const x = event.clientX;
                                        const y = event.clientY;
                                        setMousePosition({x,y});
                                    
                                    }}
                                    >
                                    <img src="/src/pages/Search/images/1610_bang-gia-may-vi-tinh.png" alt="" className='img-load'/>
                                    <div className='tool-tip' style={{
                                          display: block ? 'block' : 'none',
                                          left: `calc(0px + ${mousePosition.x}px)`, // ❌ Lỗi ReferenceError
                                        marginTop: `calc(-500px + ${mousePosition.y}px)`

                                    }} > 
                                        <a href="" className='hover_name'>
                                            Máy Vi tính Đang test
                                        </a>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Giá Bán: </td>
                                                    <td>
                                                        <span className='img_price_full'>1000</span>
                                                    </td>
                                                </tr>


                                                <tr className='p-extend-minprice'>
                                                    <td>Giá VITNH: </td>
                                                    <td className='p-extend-minprice-text'>
                                                        <span className='min_price'>1000.000 </span>
                                                        <span className='hover_vat'>[Đã bao gồm VAT]</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Bảo hành: </td>
                                                    <td>12 Tháng</td>
                                                </tr>

                                                <tr className='classhidden2024'>
                                                    <td>Kho Hàng: </td>
                                                    <td>
                                                        <span className='dongbotonkho js-dongbotonkho dongbotonkho-87915 loaded'  >

                                                            <span className='detail'>
                                                                <li>
                                                                    <a href="#"> 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</a>
                                                                </li>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                        <span className='tooltip-title'>
                                            <DynamicFeedSharpIcon fontSize='small'></DynamicFeedSharpIcon>
                                            Thông số sản phẩm
                                        </span>
                                        <div className= 'hover_offer'>
                                        - Tản nhiệt HDD DeepCool Icedisk 2 Tản nhiệt HDD DeepCool Icedisk 2 Tản nhiệt HDD DeepCool Icedisk 2
                                        <br />
                                        - Thông số kỹ thuật
                                        <br />
                                        - Tản nhiệt dành riêng cho ổ cứng
                                        <br />
                                        - Đem tới khả năng giải nhiệt cho ổ cứng khi hoạt động với cường độ liên tục
                                        <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='align-items-center'>

                                <a href="">
                                <GradeRoundedIcon fontSize="small" style={{ color: "#fe9726" }} />
                                <GradeRoundedIcon fontSize="small" style={{ color: "#fe9726" }} />
                                <GradeRoundedIcon fontSize="small" style={{ color: "#fe9726" }} />
                                <GradeRoundedIcon fontSize="small" style={{ color: "#fe9726" }} />
                                <GradeRoundedIcon fontSize="small" style={{ color: "#fe9726" }} />
                                <span className='p-count-rate'> (0) </span>
                                </a>
                                
                                <div className='p-sku'>Mã: DVSC046 </div>
                            </div>
                            <div className='p-info'>
                                <h3 className='p-name'>
                                <a href="/cai-dat-he-dieu-hanh-may-tinh-van-phong" 
                                    style={{
                                            fontSize: "12px",
                                            fontFamily: "sans-serif",
                                             color: "#333e48"
                                            }}> Cài đặt hệ điều hành máy tính văn phòng</a>
                                </h3>
                                <span className='p-price' style={{
                                         fontSize: "22px",
                                         fontFamily:"Helvetica, Arial, sans-serif",
                                         color: "#000",
                                         display: "block"

                                }}> 150.000₫ - 1.000.000₫ </span>
                            </div>
                            <div className='p-action'>

                            <span className="p-qty" style={{
                                    color: "#ed1b24",
                            }}> Đặt dịch vụ: 1900.1903</span>
                                <div className='shoppingcart'>
                                    <ShoppingCartSharpIcon fontSize="small" style={{
                                        color:"#ffffff"
                                    }}></ShoppingCartSharpIcon>

                                </div>
                            </div>
                            
                            </a>

                            </div>
                                                     
                        </div>
                    </div>
                </div>
            </div><q></q>
      </div>
    )
    
}

export default SearchPage