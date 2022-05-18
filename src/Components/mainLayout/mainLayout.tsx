import "./mainLayout.css";
import Menu from "./menu/menu";
import MyHeader from "./myHeader/myHeader";
import MainPage from './mainPage/mainPage';
import MyFooter from "./myFooter/myFooter";
import Login from "../examples/login/login";
import Alert from "../examples/alert/alert";
import Grid from './../examples/grid/grid';
import CouponCarousel from './../examples/couponCarousel/couponCarousel';
import MyMovie from './myMovie/myMovie';
import Victims from "./victims/victims";
import Test from "./test/test";

function MainLayout(): JSX.Element {
    return (
        <div className="mainLayout" dir="rtl">
			<header>
                <MyHeader/>
            </header>
            <aside>
                <Menu/>
               
            </aside>
            <main>
                <Victims/>
                <Test></Test>
            </main>
            <footer>
                <MyFooter/>
            </footer>
        </div>
    );
}

export default MainLayout;
