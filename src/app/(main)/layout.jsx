import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import NewArrival from '@/components/NewArrival';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <NewArrival></NewArrival>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;