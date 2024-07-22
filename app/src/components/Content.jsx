import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import { LawyersCarousel } from "./Carousel";
import "./Content.css";


export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      carouselHeight: 0,
    };
  }

  componentDidMount() {
    this.updateCarouselHeight();
    window.addEventListener("resize", this.updateCarouselHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCarouselHeight);
  }

  updateCarouselHeight = (time = 250) => {
    setTimeout(() => {
      if (this.carouselRef.current) {
        let height = 0;
        if (window.innerWidth > 992) {
          height = this.carouselRef.current.carouselWrapperRef.offsetHeight;
        }
        this.setState({ carouselHeight: height, contentHeight: height });
      }
    }, time);
  };

  render() {
    const { carouselInterval } = this.props;
    const { carouselHeight, contentHeight } = this.state;

    return (
      <main id="home" className="main" style={{ marginTop: carouselHeight }}>
        <LawyersCarousel
          carouselRef={this.carouselRef}
          carouselInterval={carouselInterval}
        ></LawyersCarousel>
        <Container className="container-fluid container-content" style={{ marginTop: contentHeight }}>
          <Row id="about-us">
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
          <Row id="services">
            <h1>Наші послуги</h1>
            <h3 className="nav-header h2">Кримінальні справи</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Надання консультацій</ListGroup.Item>
              <ListGroup.Item>Захист підозрюваних</ListGroup.Item>
              <ListGroup.Item>Захист потерпілих</ListGroup.Item>
              <ListGroup.Item>Участь у суді</ListGroup.Item>
            </ListGroup>
            <h3 className="nav-header h2">Цивільні справи</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Надання консультацій</ListGroup.Item>
              <ListGroup.Item>Захист підозрюваних</ListGroup.Item>
              <ListGroup.Item>Захист потерпілих</ListGroup.Item>
              <ListGroup.Item>Участь у суді</ListGroup.Item>
            </ListGroup>
            <h3 className="nav-header h2">Господарські справи</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Надання консультацій</ListGroup.Item>
              <ListGroup.Item>Захист підозрюваних</ListGroup.Item>
              <ListGroup.Item>Захист потерпілих</ListGroup.Item>
              <ListGroup.Item>Участь у суді</ListGroup.Item>
            </ListGroup>
            <h3 className="nav-header h2">Справи про адміністративні правопорушення</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Надання консультацій</ListGroup.Item>
              <ListGroup.Item>Захист підозрюваних</ListGroup.Item>
              <ListGroup.Item>Захист потерпілих</ListGroup.Item>
              <ListGroup.Item>Участь у суді</ListGroup.Item>
            </ListGroup>
            <h3 className="nav-header h2">Юридичний супровід бізнесу</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Надання консультацій</ListGroup.Item>
              <ListGroup.Item>Захист підозрюваних</ListGroup.Item>
              <ListGroup.Item>Захист потерпілих</ListGroup.Item>
              <ListGroup.Item>Участь у суді</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row id="contacts">
            <h1>Наші контакти:</h1>
            <p>Телефон +38 095 589-0660</p>
            <p>Електронна скринька sofiak_and_partners@ukr.net</p>
            <p>Адреса місто Чернівці, вулиця Прутська, 16</p>
            <p>Графік роботи Пн-Пт 9:00 - 19:00</p>
          </Row>
        </Container>
      </main>
    );
  }
}
