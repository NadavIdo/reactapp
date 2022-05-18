import { Carousel } from "react-bootstrap";
import "./couponCarousel.css";
import img1 from "../../../assets/car.jpg"
import img2 from "../../../assets/fish.jpg"
import img3 from "../../../assets/building.jpg"

function CouponCarousel(): JSX.Element {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={img1}/>
                <Carousel.Caption>
                   <h3>Car sale 40% discount</h3>
                   <p>looking for a new car for lea</p>
                </Carousel.Caption>      
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2}/>
                <Carousel.Caption>
                   <h3>perana fish 10% discount</h3>
                   <p>when you want to loose some weight</p>
                </Carousel.Caption>      
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3}/>
                <Carousel.Caption>
                   <h3>הגרלת מחיר למשתכן</h3>
                   <p>זאתי שגולן לא זכה בה</p>
                </Carousel.Caption>      
            </Carousel.Item>
        </Carousel>
    );
}

export default CouponCarousel;
