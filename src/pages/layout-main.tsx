import { Outlet } from "react-router";

import Header from "../cor-components/header";
import MainContent from "../cor-components/main-content";
import Footer from "../cor-components/footer";

export default function LayoutMain() {
    return <>
       <Header></Header>
        <MainContent>
            <Outlet />
        </MainContent>
        <Footer />
    </>
}