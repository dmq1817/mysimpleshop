// Import libraries
import { Fragment, createContext, useState, useEffect, useRef, useContext } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BsSearch, BsPerson, BsBag, BsThreeDotsVertical } from 'react-icons/bs';

// Import files
import styles from './Navbar.module.scss';
import Popper from '../Menu/Popper';
import { menuItems } from '../Menu/MenuItems';
import Button from '../Button';
import UserAvatar from '../UserAvatar';
import SidebarCart from '../SidebarCart';

const cx = classNames.bind(styles);
// sử dụng Context để truyền dữ liệu cho thằng dropdown thay vì truyền chay Navbar -> Popper -> Dropdown
export const menuItemsContext = createContext();
const currentUser = false;

function Navbar() {
    const [showSidebarCart, updateShowSidebarCart] = useState(false);

    // Xử lý click chuột ra khỏi sidebarcart nó sẽ tắt sidebarcart đi
    const SidebarCartRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            // Nếu là element đó VÀ khi  PHỦ ĐỊNH "click vào elment đó là true" thành false
            if (SidebarCartRef.current && !SidebarCartRef.current.contains(e.target)) {
                updateShowSidebarCart(false);
            }
        };

        document.addEventListener('mousedown', handler);

        // Cleanup func
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <nav className={cx('navbar')}>
            <div className="container">
                <div className={cx('navbar-container')}>
                    <Link to="/" className={cx('navbar-logo')}>
                        MySimpleShop
                    </Link>
                    <form className={cx('navbar-search')}>
                        <input
                            id="search"
                            name="search"
                            type="text"
                            placeholder="Nhập tên sản phẩm...."
                            autoComplete="off"
                            className={cx('navbar-search__input')}
                        />
                        <Button customCSS={false} className={cx('navbar-search__button')}>
                            <BsSearch />
                        </Button>
                    </form>
                    <div className={cx('navbar-action')}>
                        <Fragment>
                            {currentUser ? (
                                <menuItemsContext.Provider value={menuItems.currentUser}>
                                    <div>
                                        <Popper>
                                            <div className={cx('navbar-currentuser')}>
                                                <UserAvatar
                                                    fallback="https://play-lh.googleusercontent.com/EtpZydGFF-vDXDhlHIqEBIyocZcc2yPQpdcvZ2EjWFYdx37PyboreMABLEMDb5nEWg"
                                                    // alt="ABC XYZ"
                                                    className={cx('currentuser__avatar')}
                                                />
                                            </div>
                                        </Popper>
                                    </div>
                                </menuItemsContext.Provider>
                            ) : (
                                <menuItemsContext.Provider value={menuItems.guest}>
                                    <div>
                                        <Popper>
                                            <div className={cx('navbar-user')}>
                                                <Button
                                                    customCSS={false}
                                                    className={cx('navbar-user__button')}
                                                    leftIcon={<BsPerson />}
                                                >
                                                    Tài khoản
                                                </Button>
                                            </div>
                                        </Popper>
                                    </div>
                                </menuItemsContext.Provider>
                            )}
                        </Fragment>
                        <div className={cx('navbar-bag')}>
                            <Button
                                onClick={() => updateShowSidebarCart(!showSidebarCart)}
                                customCSS={false}
                                className={cx('navbar-bag__button')}
                                leftIcon={<BsBag />}
                            >
                                Số lượng: <span className={cx('navbar-bag__quantity')}>0</span>
                            </Button>
                            {showSidebarCart && (
                                <SidebarCart ref={SidebarCartRef} updateShowSidebarCart={updateShowSidebarCart} />
                            )}
                        </div>
                        <div className={cx('navbar-settings')}>
                            <menuItemsContext.Provider value={menuItems.settings}>
                                <Popper>
                                    <div>
                                        <Button customCSS={false} className={cx('navbar-settings__button')}>
                                            <BsThreeDotsVertical />
                                        </Button>
                                    </div>
                                </Popper>
                            </menuItemsContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
