// Import libraries
import { useContext, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

// Import files
import styles from './Popper.module.scss';
import Button from '../../Button';
import { menuItemsContext } from '../../Navbar';
import SubMenu from '../SubMenu';

const cx = classNames.bind(styles);
function Popper({ children }) {
    // sử dụng Context để truyền dữ liệu cho thằng dropdown thay vì truyền chay Navbar -> Popper -> Dropdown
    const menuItemsData = useContext(menuItemsContext);
    const [history, updateHistory] = useState([{ data: menuItemsData }]); //cùng format data có gì loop có thể push vào được

    const current = history[history.length - 1];

    const handleRenderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.subSettings;
            return (
                <li key={index} className={cx('dropdown-item', { separate: item.separate })}>
                    <Button
                        to={item.to}
                        className={cx('dropdown__link')}
                        leftIcon={item.icon}
                        customCSS={true}
                        onClick={() => {
                            if (isParent)
                                updateHistory((prev) => {
                                    console.log(prev);
                                    return [...prev, item.subSettings];
                                });
                            //cùng format data có gì loop có thể push vào được
                        }}
                    >
                        {item.title}
                    </Button>
                </li>
            );
        });
    };

    return (
        <Tippy
            placement="top-end"
            hideOnClick="false"
            offset={[0, 20]}
            interactive
            onHide={() => updateHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <ul className={cx('dropdown-list')} tabIndex="-1" {...attrs}>
                    {history.length > 1 && (
                        <SubMenu
                            title="Ngôn ngữ"
                            onBack={() => {
                                updateHistory((prev) => prev.slice(0, prev.length - 1));
                            }}
                        />
                    )}
                    {handleRenderItem()}
                </ul>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Popper;
