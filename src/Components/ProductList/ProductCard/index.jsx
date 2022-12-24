// Import libraries
import { useState, createContext } from 'react';
import classNames from 'classnames/bind';
import { BsCart, BsZoomIn } from 'react-icons/bs';

// Import files
import styles from './ProductCard.module.scss';
import { products } from '../../../data';
import Button from '../../Button';

const cx = classNames.bind(styles);

function ProductCard() {
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            const newCartItems = cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item,
            );
            setCartItems(newCartItems);
        } else {
            const newCartItems = [...cartItems, { ...product, qty: 1 }];
            setCartItems(newCartItems);
        }
    };

    return products.map((product) => (
        <li key={product.id} className={cx('product-item')}>
            <div className={cx('product-card')}>
                <img src={product.imgUrl} alt={product.name} className={cx('product-img')} />

                <div className={cx('product-content')}>
                    <h3 className={cx('product-heading')}>{product.name}</h3>
                </div>
                <div className={cx('product-footer')}>
                    <Button
                        customCSS={false}
                        leftIcon={<BsCart />}
                        onClick={() => {
                            onAdd(product);
                        }}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                    <Button customCSS={false} leftIcon={<BsZoomIn />}>
                        Xem sản phẩm
                    </Button>
                </div>
            </div>
        </li>
    ));
}

export default ProductCard;
