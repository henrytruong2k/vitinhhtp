import React, { useState } from 'react';
import './Cart.scss';

const Cart = () => {
    // Dữ liệu giỏ hàng (sản phẩm, giá, số lượng)
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
        { id: 2, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
        { id: 3, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
        { id: 4, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
        { id: 5, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
        { id: 6, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' }
        // Thêm các sản phẩm khác ở đây
    ]);
    // Thay đổi trạng thái khi checkbox được chọn
        const toggleSelectItem = (id) => {
        const updatedSelectedItems = new Set(selectedItems);
        if (updatedSelectedItems.has(id)) {
            updatedSelectedItems.delete(id);
        } else {
            updatedSelectedItems.add(id);
        }
        setSelectedItems(updatedSelectedItems);
        updateTotalPrice(); // Cập nhật lại tổng tiền khi thay đổi lựa chọn
    };
    
    const [selectedItems, setSelectedItems] = useState(new Set()); // Trạng thái cho sản phẩm được chọn
    // Giá trị giảm giá (0 = không có giảm giá)
    const [discount, setDiscount] = useState(0);
    const [discountCode, setDiscountCode] = useState('');
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);

    // // Tính tổng tiền (tạm tính) trước khi giảm giá
    // const calculateTotal = () => {
    //     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // };

    // Tính tổng tiền (chỉ tính các sản phẩm được chọn)
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            if (selectedItems.has(item.id)) {
                return total + item.price * item.quantity;
            }
            return total;
        }, 0);
    };

    // Tính giá trị giảm giá (Tạm tính * phần trăm giảm giá)
    const calculateDiscountAmount = () => {
        const total = calculateTotal();
        return total * (discount / 100);
    }
    // Tính tổng tiền sau khi giảm giá
    const calculateDiscountedTotal = () => {
        const total = calculateTotal();
        return total - (total * discount / 100);
    };


        // // Tính tổng số lượng sản phẩm
        // const calculateTotalQuantity = () => {
        // return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
        //  };



    // Tăng số lượng sản phẩm
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Giảm số lượng sản phẩm
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

     // Tính tổng số lượng sản phẩm
     const calculateTotalQuantity = () => {
        return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    };
    // Xóa sản phẩm
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Áp dụng giảm giá khi nhập mã
    const applyDiscount = () => {
        if (discountCode === 'Giam10') {
            setDiscount(10);  // Giảm 10% nếu mã là Giam10
            setIsDiscountApplied(true);
        } else if (discountCode === 'Giam20') {
            setDiscount(20);  // Giảm 20% nếu mã là Giam20
            setIsDiscountApplied(true);
        } else {
            alert('Mã giảm giá không hợp lệ!');
            setDiscount(0);
            setIsDiscountApplied(false);
        }
        updateTotalPrice();  // Cập nhật lại tổng tiền và thành tiền sau khi áp dụng giảm giá
    };

    // Cập nhật ô tạm tính và tổng tiền khi có sự thay đổi
    const updateTotalPrice = () => {
        

        // Cập nhật ô tổng tiền giỏ hàng
        const totalCartPriceElement = document.querySelector('.total-cart-price');
        if (totalCartPriceElement) {
            totalCartPriceElement.textContent = `${total.toLocaleString()}₫`;
        }

        const totalCartPaymentElement = document.querySelector('.total-cart-payment');
        if (totalCartPaymentElement) {
            totalCartPaymentElement.textContent = `${discountedTotal.toLocaleString()}₫`;
        }

        const total = calculateTotal();
        const discountedTotal = calculateDiscountedTotal();
        
        // Cập nhật giá trị thành tiền của từng sản phẩm
        cartItems.forEach(item => {
            const itemTotalPrice = item.price * item.quantity;
            const itemElement = document.querySelector(`#total-price-${item.id}`);
            if (itemElement) {
                itemElement.textContent = `${itemTotalPrice.toLocaleString()}₫`;
            }
        });

           // Cập nhật ô giảm giá
           const discountAmount = calculateDiscountAmount();
           const discountElement = document.querySelector('#price-discount');
           if (discountElement) {
               discountElement.textContent = `${discountAmount.toLocaleString()}₫`;
           }
           
    };

    // Hiển thị modal xác nhận xóa giỏ hàng
    const [showClearCartModal, setShowClearCartModal] = useState(false);
    // Hàm gọi khi xóa toàn bộ giỏ hàng
    const clearCart = () => {
        setCartItems([]);
        setDiscount(0);
        setDiscountCode('');
        setIsDiscountApplied(false);
        updateTotalPrice();
        
    };

    return (
        <div>
            <div className="body-card">
                <div className="card">
                    <div className="container">
                        <div className="breadcrumb mb-0 p-0">
                            <ul className="list-unstyled m-0">
                                <li>
                                    <a href="/home" itemprop="item">
                                        <span itemprop="name">Home</span>
                                    </a>
                                    <meta itemprop="position" content="1" />
                                </li>
                                <li itemprop="itemListElement">
                                    <a href="/cart" itemprop="item">
                                        <span>
                                            <span itemprop="name" className="">Cart</span>
                                        </span>
                                    </a>
                                    <meta itemprop="position" content="2" />
                                </li>
                            </ul>
                        </div>
                        <div className="title-n">Cart</div>
                        <div className="noidung">
                            <div className="bentrai">
                                <div className="new-cart-items-row">
                                    <div className="cart-col-product">
                                        <div className="fake-checkbox active" id="js-check-cart-all-item" />
                                        <span>
                                            Tất cả (<span className="cart_counter_new">{calculateTotalQuantity()}</span> sản phẩm)
                                        </span>
                                    </div>
                                    <div className="cart-col-price">Đơn giá</div>
                                    <div className="cart-col-quantity">Số lượng</div>
                                    <div className="cart-col-total-price">Thành tiền</div>
                                    <div className="cart-col-delete">
                                        <a className="new-cart-del-shopping-btn new-2021" id="clear-cart-button" href="javascript:void(0);" onClick={() => setShowClearCartModal(true)}>
                                            <img title="Xóa toàn bộ giỏ hàng" src="https://hacom.vn/template/july_2021/images/trash.svg" className="loading" />
                                        </a>
                                    </div>
                                </div>

                                {/* Cart Item */}
                                {cartItems.map((item) => (
                                    <div className="cart-list-item" key={item.id}>
                                        <div className="new-cart-items-row">
                                            <div className="cart-col-product">
                                                <div className="canh_giua">
                                                    <input
                                                        type="checkbox"
                                                        className="product-checkbox"
                                                        onChange={() => toggleSelectItem(item.id)}
                                                        checked={selectedItems.has(item.id)}
                                                    />
                                                </div>
                                                <img className="cart-n-p-img" src={item.image} alt={item.name} />
                                                <div className="cart-n-p-info">
                                                    <a className="cart_sku">
                                                        {item.name}
                                                    </a>
                                                    <span className="cart-n-p-sku">
                                                        Mã SP: <b>PCGM845</b>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="cart-col-price">
                                                <span className="new-cart-items-price js-show-buy-price">
                                                    {item.price.toLocaleString()} ₫
                                                </span>
                                            </div>
                                            <div className="cart-col-quantity">
                                                <span className="new-cart-quantity">
                                                    <a href="javascript:void(0);" className="minor quantity-change" data-value="-1" title="Trừ" onClick={() => decreaseQuantity(item.id)}>
                                                        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="hnc-svg-icon">
                                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                                        </svg>
                                                    </a>
                                                    <input className="buy" value={item.quantity} size="5" data-stock="998" id={`quantity-${item.id}`} />
                                                    <a href="javascript:void(0);" className="add quantity-change" data-value="1" title="Thêm" onClick={() => increaseQuantity(item.id)}>
                                                        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="hnc-svg-icon">
                                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="cart-col-total-price">
                                                <b className="total-item-price" id={`total-price-${item.id}`}>
                                                    {(item.price * item.quantity).toLocaleString()}₫
                                                </b>
                                            </div>
                                            <div className="cart-col-delete">
                                                <a className="new-cart-del-shopping-btn new-2021" onClick={() => removeItem(item.id)}>
                                                    <img title="Xóa sản phẩm" src="https://hacom.vn/template/july_2021/images/trash.svg" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                    {/* Modal xác nhận xóa giỏ hàng */}
                            {showClearCartModal && (
                                <div className="clear-cart-modal">
                                    <div className="modal-content">
                                        <p>Bạn có chắc chắn muốn xóa toàn bộ sản phẩm trong giỏ hàng không?</p>
                                        <div className="modal-buttons">
                                            <button onClick={() => {setShowClearCartModal(false);clearCart()}}>Có</button>
                                            <button onClick={() => setShowClearCartModal(false)}>Không</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            </div>
                            <div className="benphai">
                                <div className="box-cart-address">
                                    <div className="voucher">
                                        <div className="voucher-ct">
                                            <input type="text" className="txt" id="discount_code" name="coupon_code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} placeholder="Mã giảm giá/ quà tặng" />
                                            <a href="javascript:void(0);" className="button-check-discount" onClick={applyDiscount}>Áp dụng</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-cart-total-price">
                                    <p>
                                        <span>Tạm tính</span>
                                        <span className="total-cart-price">{calculateTotal().toLocaleString()}₫</span>
                                    </p>
                                    <p>
                                        <span>Giảm giá</span>
                                        <span id="price-discount">{calculateDiscountAmount().toLocaleString()}₫</span>
                                    </p>
                                    <p>
                                        <span>Tổng tiền</span>
                                        <span className="red-b total-cart-payment">{calculateDiscountedTotal().toLocaleString()}₫</span>
                                    </p>
                                    <span className="cart-vat">(Đã bao gồm VAT nếu có)</span>
                                </div>
                                <a href="/payment" className="button-buy-submit-cart">
                                    Xác Nhận Thanh Toán
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;





// import React, { useState } from 'react';
// import './Cart.scss';

// const Cart = () => {
//     // Dữ liệu giỏ hàng (sản phẩm, giá, số lượng)
//     const [cartItems, setCartItems] = useState([
//         { id: 1, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
//         { id: 2, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
//         { id: 3, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
//         { id: 4, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
//         { id: 5, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' },
//         { id: 6, name: 'HACOM APOLLO i14-Black Myth Wukong (GeForce RTX 4070Ti Super /i7 14700K/Z790/32G RAM/1000W)', price: 77989000, quantity: 1, image: 'https://hanoicomputercdn.com/media/product/250_83037_hacom_apollo_i14_i7_14700k_z790_32g_ram_rtx_4070ti_super_1000wx.jpg' }
//     ]);

//     const [selectedItems, setSelectedItems] = useState(new Set()); // Trạng thái cho sản phẩm được chọn
//     const [discount, setDiscount] = useState(0);
//     const [discountCode, setDiscountCode] = useState('');
//     const [isDiscountApplied, setIsDiscountApplied] = useState(false);

//     // Tính tổng tiền (chỉ tính các sản phẩm được chọn)
//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => {
//             if (selectedItems.has(item.id)) {
//                 return total + item.price * item.quantity;
//             }
//             return total;
//         }, 0);
//     };

//     // Tính giá trị giảm giá
//     const calculateDiscountAmount = () => {
//         const total = calculateTotal();
//         return total * (discount / 100);
//     };

//     // Tính tổng tiền sau khi giảm giá
//     const calculateDiscountedTotal = () => {
//         const total = calculateTotal();
//         return total - (total * discount / 100);
//     };

//     // Thay đổi trạng thái khi checkbox được chọn
//     const toggleSelectItem = (id) => {
//         const updatedSelectedItems = new Set(selectedItems);
//         if (updatedSelectedItems.has(id)) {
//             updatedSelectedItems.delete(id);
//         } else {
//             updatedSelectedItems.add(id);
//         }
//         setSelectedItems(updatedSelectedItems);
//         updateTotalPrice(); // Cập nhật lại tổng tiền khi thay đổi lựa chọn
//     };

//     // Cập nhật ô tổng tiền khi có sự thay đổi
//     const updateTotalPrice = () => {
//         const total = calculateTotal();
//         const discountedTotal = calculateDiscountedTotal();

//         const totalCartPriceElement = document.querySelector('.total-cart-price');
//         if (totalCartPriceElement) {
//             totalCartPriceElement.textContent = `${total.toLocaleString()}₫`;
//         }

//         const totalCartPaymentElement = document.querySelector('.total-cart-payment');
//         if (totalCartPaymentElement) {
//             totalCartPaymentElement.textContent = `${discountedTotal.toLocaleString()}₫`;
//         }

//         // Cập nhật giá trị thành tiền của từng sản phẩm
//         cartItems.forEach(item => {
//             if (selectedItems.has(item.id)) {
//                 const itemTotalPrice = item.price * item.quantity;
//                 const itemElement = document.querySelector(`#total-price-${item.id}`);
//                 if (itemElement) {
//                     itemElement.textContent = `${itemTotalPrice.toLocaleString()}₫`;
//                 }
//             }
//         });

//         // Cập nhật ô giảm giá
//         const discountAmount = calculateDiscountAmount();
//         const discountElement = document.querySelector('#price-discount');
//         if (discountElement) {
//             discountElement.textContent = `${discountAmount.toLocaleString()}₫`;
//         }
//     };

//     // Áp dụng giảm giá khi nhập mã
//     const applyDiscount = () => {
//         if (discountCode === 'Giam10') {
//             setDiscount(10);
//             setIsDiscountApplied(true);
//         } else if (discountCode === 'Giam20') {
//             setDiscount(20);
//             setIsDiscountApplied(true);
//         } else {
//             alert('Mã giảm giá không hợp lệ!');
//             setDiscount(0);
//             setIsDiscountApplied(false);
//         }
//         updateTotalPrice(); // Cập nhật lại tổng tiền và thành tiền sau khi áp dụng giảm giá
//     };

//     return (
//         <div>
//             <div className="body-card">
//                 <div className="card">
//                     <div className="container">
//                         <div className="breadcrumb mb-0 p-0">
//                             <ul className="list-unstyled m-0">
//                                 <li>
//                                     <a href="/" itemprop="item">
//                                         <span itemprop="name">Home</span>
//                                     </a>
//                                     <meta itemprop="position" content="1" />
//                                 </li>
//                                 <li itemprop="itemListElement">
//                                     <a href="/" itemprop="item">
//                                         <span>
//                                             <span itemprop="name" className="">Cart</span>
//                                         </span>
//                                     </a>
//                                     <meta itemprop="position" content="2" />
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="title-n">Cart</div>
//                         <div className="noidung">
//                             <div className="bentrai">
//                                 <div className="new-cart-items-row">
//                                     <div className="cart-col-product">
//                                         <div className="fake-checkbox active" id="js-check-cart-all-item" />
//                                         <span>
//                                             Tất cả (<span className="cart_counter_new">{cartItems.length}</span> sản phẩm)
//                                         </span>
//                                     </div>
//                                     <div className="cart-col-price">Đơn giá</div>
//                                     <div className="cart-col-quantity">Số lượng</div>
//                                     <div className="cart-col-total-price">Thành tiền</div>
//                                     <div className="cart-col-delete">
//                                         <a className="new-cart-del-shopping-btn new-2021" href="javascript:void(0);" onClick={() => setShowClearCartModal(true)}>
//                                             <img title="Xóa toàn bộ giỏ hàng" src="https://hacom.vn/template/july_2021/images/trash.svg" className="loading" />
//                                         </a>
//                                     </div>
//                                 </div>

//                                 {/* Cart Item */}
//                                 {cartItems.map((item) => (
//                                     <div className="cart-list-item" key={item.id}>
//                                         <div className="new-cart-items-row">
//                                             <div className="cart-col-product">
//                                                 <div className="canh_giua">
//                                                     <input
//                                                         type="checkbox"
//                                                         className="product-checkbox"
//                                                         onChange={() => toggleSelectItem(item.id)}
//                                                         checked={selectedItems.has(item.id)}
//                                                     />
//                                                 </div>
//                                                 <img className="cart-n-p-img" src={item.image} alt={item.name} />
//                                                 <div className="cart-n-p-info">
//                                                     <a className="cart_sku">{item.name}</a>
//                                                     <span className="cart-n-p-sku">
//                                                         Mã SP: <b>PCGM845</b>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <div className="cart-col-price">
//                                                 <span className="new-cart-items-price js-show-buy-price">
//                                                     {item.price.toLocaleString()} ₫
//                                                 </span>
//                                             </div>
//                                             <div className="cart-col-quantity">
//                                                 <span className="new-cart-quantity">
//                                                     <a href="javascript:void(0);" className="minor quantity-change" title="Trừ" onClick={() => decreaseQuantity(item.id)} />
//                                                     <input className="buy" value={item.quantity} size="5" id={`quantity-${item.id}`} />
//                                                     <a href="javascript:void(0);" className="add quantity-change" title="Thêm" onClick={() => increaseQuantity(item.id)} />
//                                                 </span>
//                                             </div>
//                                             <div className="cart-col-total-price">
//                                                 <b className="total-item-price" id={`total-price-${item.id}`}>
//                                                     {(item.price * item.quantity).toLocaleString()}₫
//                                                 </b>
//                                             </div>
//                                             <div className="cart-col-delete">
//                                                 <a className="new-cart-del-shopping-btn new-2021" onClick={() => removeItem(item.id)} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="benphai">
//                                 <div className="box-cart-address">
//                                     <div className="voucher">
//                                         <div className="voucher-ct">
//                                             <input
//                                                 type="text"
//                                                 className="txt"
//                                                 value={discountCode}
//                                                 onChange={(e) => setDiscountCode(e.target.value)}
//                                                 placeholder="Mã giảm giá/ quà tặng"
//                                             />
//                                             <a href="javascript:void(0);" className="button-check-discount" onClick={applyDiscount}>Áp dụng</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="box-cart-total-price">
//                                     <p>
//                                         <span>Tạm tính</span>
//                                         <span className="total-cart-price">{calculateTotal().toLocaleString()}₫</span>
//                                     </p>
//                                     <p>
//                                         <span>Giảm giá</span>
//                                         <span id="price-discount">{calculateDiscountAmount().toLocaleString()}₫</span>
//                                     </p>
//                                     <p>
//                                         <span>Tổng tiền</span>
//                                         <span className="red-b total-cart-payment">{calculateDiscountedTotal().toLocaleString()}₫</span>
//                                     </p>
//                                     <span className="cart-vat">(Đã bao gồm VAT nếu có)</span>
//                                 </div>
//                                 <button className="button-buy-submit-cart" onClick={() => alert('Đặt hàng thành công!')}>Xác Nhận</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;












