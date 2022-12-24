// Import libraries
import classNames from 'classnames/bind';

// Import files
import styles from './ProductList.module.scss';
import ProductCard from './ProductCard';

const cx = classNames.bind(styles);

function ProductList() {
    return (
        <ul className={cx('product-list')}>
            <ProductCard />
        </ul>
    );
}

export default ProductList;
