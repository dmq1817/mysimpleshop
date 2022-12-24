// Import libraries
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

// Import files
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ children, customCSS = true, className, leftIcon, rightIcon, ...passProps }) {
    let Comp = 'button';

    // Object chứa các attribute của thẻ a hoặc button hoặc link được giải vào đây
    const props = {
        ...passProps,
    };

    // Kiểm tra xem thẻ đó có attribute là to, href thì chuyển thành thẻ tương ứng
    if (props.to) {
        // Nếu Button có attribute là to thì chuyển nó thành Link
        Comp = Link;
    } else if (props.href) {
        // Nếu button có attribute href thì chuyển nó thành a
        Comp = 'a';
    }

    // Khai báo classes để mặc định cho button
    let classes = cx('button', className); // truyền className của Component khác để custom CSS

    return (
        <Comp className={customCSS ? className : classes} {...props}>
            {leftIcon && <span className={cx('button--leftIcon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('button--rightIcon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
