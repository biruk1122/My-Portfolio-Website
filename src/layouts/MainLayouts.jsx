import Header from "../components/Header.jsx"
import {Outlet} from "react-router-dom"
import Footer from "../components/Footer.jsx"

function MainLayouts(){
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default MainLayouts