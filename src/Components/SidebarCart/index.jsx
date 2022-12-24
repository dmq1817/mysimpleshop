// Import libraries
import { forwardRef } from 'react';
import { BsCartFill, BsX } from 'react-icons/bs';
import classNames from 'classnames/bind';

// Import files
import styles from './SidebarCart.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

// truyền hàm update useState của Component cha sang đây để update state lại cho biến state
const SidebarCart = forwardRef(({ updateShowSidebarCart }, ref) => {
    return (
        <div className={cx('sidebar-cart')}>
            <div className={cx('sidebar-cart-overlay')}>
                <div className={cx('sidebar-cart-content')} ref={ref}>
                    <h3 className={cx('sidebar-cart__heading')}>
                        <BsCartFill />
                        Giỏ hàng của bạn
                        <Button
                            onClick={() => updateShowSidebarCart((prev) => !prev)}
                            customCSS={false}
                            className={cx('sidebar-cart__btn')}
                        >
                            <BsX />
                        </Button>
                    </h3>
                </div>
            </div>
        </div>
    );
});

export default SidebarCart;
