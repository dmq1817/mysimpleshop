// Import libraries
import { FaRegQuestionCircle, FaUserPlus, FaSignInAlt, FaGlobe, FaMoon, FaSun } from 'react-icons/fa';

export const menuItems = {
    guest: [
        {
            icon: <FaSignInAlt />,
            title: 'Đăng nhập',
            to: '/login',
        },
        {
            icon: <FaUserPlus />,
            title: 'Đăng ký',
            to: '/register',
        },
        {
            icon: <FaRegQuestionCircle />,
            title: 'Quên gì gì đó',
            to: '/forgot',
        },
    ],
    currentUser: [
        {
            title: 'Tài khoản của tôi',
            to: '/profile',
        },
        {
            title: 'Xem đơn hàng',
            to: '/orders',
        },
        {
            title: 'Lịch sử giao dịch',
            to: '/transaction-history',
        },
        {
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ],
    settings: [
        {
            icon: <FaGlobe />,
            title: 'Ngôn ngữ hiện tại',
            subSettings: {
                title: 'Ngôn ngữ',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FaRegQuestionCircle />,
            title: 'FAQs',
            to: '/faqs',
        },
        {
            title: 'Chế độ tối',
            icon: <FaMoon />,
        },
    ],
};
