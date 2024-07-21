import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    labelText: "Ми вас захистимо ніжно і надійсно",
  },{
    URL: lawyers3,
    labelHeader: "Цивільні справи",
    labelText: "Краще нас лише Мама Тереза",
  },{
    URL: lawyers4,
    labelHeader: "Спори з податковим органом",
    labelText: "Що там спорити і так ясно, що їхні вимоги незаконні",
  },
];

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      carouselHeight: 0,
    };
    this.updateCarouselHeight(0);
  }

  componentDidMount() {
    this.updateCarouselHeight();
    window.addEventListener("resize", this.updateCarouselHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCarouselHeight);
  }

  updateCarouselHeight = (time=200) => {
    setTimeout(() => {
      if (this.carouselRef.current) {
        const height = this.carouselRef.current.carouselWrapperRef.offsetHeight;
        this.setState({ carouselHeight: height });
      }
    }, time);
  };

  render() {
    const { carouselInterval } = this.props;
    const { carouselHeight } = this.state;

    return (
      <main className="main" style={{ marginTop: carouselHeight }}>
        <div className="box">
          <Carousel
            animationHandler="fade"
            ref={this.carouselRef}
            className="carousel-fullwidth"
            interval={carouselInterval}
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
        <Container className="container-fluid container-content">
          <Row>
            <Col className="col-12 main-section-text">
              Юридична особа АДВОКАТСЬКЕ ОБ'ЄДНАННЯ СОФЯК ТА ПАРТНЕРИ, код
              ЄДРПОУ 38843726, було зареєстровано 02.09.2013. Розмір статутного
              капіталу юридичної особи складає 20 000,00. На момент останнього
              оновлення даних 19.07.2024 статус юридичної особи - Не перебуває в
              процесі припинення. Уповноваженою особою юридичної особи
              АДВОКАТСЬКЕ ОБ'ЄДНАННЯ "СОФЯК ТА ПАРТНЕРИ є СОФЯК ВАЛЕНТИНА
              ВАСИЛІВНА. Організаційно-правова форма юридичної особи АДВОКАТСЬКЕ
              ОБ'ЄДНАННЯ СОФЯК ТА ПАРТНЕРИ - ІНШІ ОРГАНІЗАЦІЙНО-ПРАВОВІ ФОРМИ.
              Основний вид діяльності (КВЕД) – 69.10 Діяльність у сфері права. І
              завжди ви можете подивитись судові рішення, в яких згадується
              юридична особа АДВОКАТСЬКЕ ОБ'ЄДНАННЯ "СОФЯК ТА ПАРТНЕРИ, і стан
              розгляду справ. Контактні відомості юридичної особи АДВОКАТСЬКЕ
              ОБ'ЄДНАННЯ СОФЯК ТА ПАРТНЕРИ Телефон: +380372594134 +380372594135
              Юридична особа АДВОКАТСЬКЕ ОБ'ЄДНАННЯ "СОФЯК ТА ПАРТНЕРИ
              зареєстрована за юридичною адресою Україна, **8, Чернівецька обл.,
              місто Чернівці, ВУЛИЦЯ ПРУТСЬКА, будинок **
            </Col>
          </Row>
          <Row>Наші послуги</Row>
          <Row>Адреса:</Row>
        </Container>
      </main>
    );
  }
}
