// Import files
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';

const configLayouts = [
    { path: '/', component: Home, sharedLayout: true },
    { path: '/home', component: Home, sharedLayout: true },
    { path: '/cart', component: Cart, sharedLayout: true },
    { path: '/login', component: Login, sharedLayout: false },
    { path: '/register', component: Register, sharedLayout: false },
    { path: '*', component: NotFound, sharedLayout: false },
];

export default configLayouts;
