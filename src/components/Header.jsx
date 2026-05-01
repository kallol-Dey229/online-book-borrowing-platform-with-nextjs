import { FaBookReader } from "react-icons/fa";
import 'animate.css';


const Header = () => {
    return (
        <div className="mt-10 mb-10 mx-15 md:mx-40 lg:mx-85">
            <div className="flex gap-3 items-center">
            <FaBookReader className="md:text-xl lg:text-3xl" />
            <h2 className="animate__animated animate__fadeInLeft text-xl md:text-3xl lg:text-5xl font-bold">Online Book Borrowing Platform</h2>
        </div>
        </div>
    );
};

export default Header;