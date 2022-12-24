// Import libraries
import { Fragment } from 'react';

// Import files
import './SharedLayout.module.scss';
import Navbar from '../../Components/Navbar';

function SharedLayout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <div className="container">{children}</div>
        </Fragment>
    );
}

export default SharedLayout;
