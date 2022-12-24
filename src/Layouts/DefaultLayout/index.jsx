// Import files
import './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return <div className="container">{children}</div>;
}

export default DefaultLayout;
