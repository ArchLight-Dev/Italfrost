import React from 'react';
import Header from "./Header";
import SlideShow from "./SlideShow";

import slide1 from "../Art/criocabin-lada-enixe-regal-eride.jpg";
import slide2 from "../Art/drzwi-bezramowe-gran-vista.jpg";
import slide3 from "../Art/lada-chlodnicza-ebonyony-z-produktami-garmazeryjnymi.jpg";
import slide4 from "../Art/lada-chlodnicza-enixe-na-swieze-mieso.jpg";
import slide5 from "../Art/lady-chlodnicze-z-miesem-enixe-elisir.jpg";


const slides = [{
    url: slide1,
    title: "beach"
}, {
    url: slide2,
    title: "boat"
}, {
    url: slide3,
    title: "forest"
}, {
    url: slide4,
    title: "city"
}, {url: slide5, title: "italy"},];

const containerStyles = {
    width: "500px", height: "280px", margin: "0 auto",
};


function FrontPage(props) {
    return (<section id={'topSection'} className={'page'}>
        <Header/>
        <div className={'landing'}>
            <div className={'landingContent'}>
                <div className={'landingLeftSide'}>
                    <SlideShow slides={slides}/>
                </div>
                <div className={'landingRightSide'}>
                    <div className={'list'}>
                        <h1 className={'headline'}>Wyposażenie sklepów</h1>
                        <h3 className={'link listElement active2'}>lady chłodnicze</h3>
                        <h3 className={'link listElement active2'}>regały chłodnicze</h3>
                        <h3 className={'link listElement active2'}>szafy chłodnicze</h3>
                        <h3 className={'link listElement active2'}>szafy do sezonowania</h3>
                        <h3 className={'link listElement active2'}>komory chłodnicze</h3>
                    </div>
                    <div className={'list'}>
                        <h1 className={'headline'}>wyposażenie magazynów</h1>
                        <h3 className={'link listElement active2'}>regały paletowe</h3>
                        <h3 className={'link listElement active2'}>regały półkowe</h3>
                        <h3 className={'link listElement active2'}>antresole przemysłowe</h3>
                        <h3 className={'link listElement active2'}>podesty magazynowe</h3>
                        <h3 className={'link listElement active2'}>regały na opony</h3>
                        <h3 className={'link listElement active2'}>regały wspornikowe</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default FrontPage;