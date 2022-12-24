// Import libraries
import { BsArrowLeftShort } from 'react-icons/bs';
import classNames from 'classnames/bind';

// Import files
import styles from './SubMenu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function SubMenu({ title, onBack }) {
    return (
        <div className={cx('sub-menu')}>
            <Button customCSS={false} onClick={onBack} className={cx('sub-menu__backbtn')}>
                <BsArrowLeftShort />
            </Button>
            <h4 className={cx('sub-menu__heading')}>{title}</h4>
        </div>
    );
}

export default SubMenu;
