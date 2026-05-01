import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;