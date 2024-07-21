import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LawyersCarousel } from "./Carousel";
import "./Content.css";


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

  updateCarouselHeight = (time = 200) => {
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
        <LawyersCarousel
          carouselRef={this.carouselRef}
          carouselInterval={carouselInterval}
        ></LawyersCarousel>
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
