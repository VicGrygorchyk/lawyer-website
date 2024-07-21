import React from "react";

import { Carousel } from "react-responsive-carousel";
import Image from "react-bootstrap/Image";
import "./Content.css";
import lawyers1 from "../assets/lawyers1.png";
import lawyers2 from "../assets/lawyers2.png";
import lawyers3 from "../assets/lawyers3.png";
import lawyers4 from "../assets/lawyers4.png";

const images = [
  {
    URL: lawyers1,
    labelHeader: "Наші досягнення",
    labelText: "Захистили N клієнтів від кримінального переслідування",
  },
  {
    URL: lawyers2,
    labelHeader: "Захист від кримінального переслідування",
    labelText: "Ми вас захистимо ніжно і надійно",
  },
  {
    URL: lawyers3,
    labelHeader: "Наші проєкти",
    labelText: "Кращі ніж наші проєкти ще не придумали",
  },
  {
    URL: lawyers4,
    labelHeader: "Спори з податковим органом",
    labelText: "Що там спорити і так ясно, що їхні вимоги незаконні",
  },
];

export class LawyersCarousel extends React.Component {

  render() {
    return (
        <div className="box">
          <Carousel
            animationHandler="fade"
            ref={this.props.carouselRef}
            className="carousel-fullwidth"
            interval={this.props.carouselInterval}
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            transitionTime={1000}
            infiniteLoop={true}
            useKeyboardArrows={true}
          >
            {images.map((obj, index) => (
              <div className="slide" key={index}>
                <Image alt="lawyers image for the carousel" src={obj.URL} />
                <div className="legend carousel-caption">
                  <h3 className="carousel-caption-text">{obj.labelHeader}</h3>
                  <p className="carousel-caption-text">{obj.labelText}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
    );
  }
}
