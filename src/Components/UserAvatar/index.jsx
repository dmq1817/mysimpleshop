// Import libraries
import { forwardRef, useState } from 'react';

// Import files
import images from '../../assets/images';

// đổi tên fallback thành customFallback với giá trị mặc định đã đặt
// khi truyền props fallback từ bên Component cha thì nó sẽ nhận dữ liệu qua đây (fallback:url)
// và hàm handleError sẽ lấy dữ liệu truyền vào (nôm na fallback: customfallback chỉ là đổi tên Prop)
// fallback: có dữ liệu url ảnh custom từ Component cha (nếu truyền)
// customfallback: có dữ liệu ảnh mặc định (nếu không)
// => setFallback sẽ kiểu như  truyền thì lấy dữ liệu fallback ngược lại lấy customFallback
const UserAvatar = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...passProps }, ref) => {
    const [fallback, setFallback] = useState(' '); // chú ý (' ') mới chạy được onError

    // Xử lý ảnh bị lỗi
    const handleError = () => {
        setFallback(customFallback);
    };

    return <img ref={ref} src={fallback || src} alt={alt} onError={handleError} {...passProps} />;
});

export default UserAvatar;
