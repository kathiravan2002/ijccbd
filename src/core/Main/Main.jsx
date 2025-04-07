import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"


export default function Main() {
    return (

        <div className="bg-[#F5F5F5]">
            <Header />
           
            <main className={`w-auto mx-auto  2xl:p-0   p-4  xl:max-w-[1464px]  md:max-w-[920px] lg:mb-6 mb-3 min-h-[85vh] `}>
               
                <Outlet />
            </main>
            <Footer />
        </div>


    );
}
