import { Col, Container, Row, Image } from "react-bootstrap";
import "../assets/css/home.css";
import HomeMarquee from "./Partials/HomeMarquee";
import image6 from "/img/home/image6.png";
import image7 from "/img/home/image7.png";
import image8 from "/img/home/image8.png";
import image9 from "/img/home/image9.png";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center tag-block">
            <h1 className="headline">Professional Web Development Services</h1>
            <span className="text-white tag-line">
              We tackle and preempt IT challenges by offering robust, customized
              software solutions that ensure peak performance and success.
            </span>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-4">
        <HomeMarquee></HomeMarquee>
      </Container>
      <div style={{ background: "#071322" }}>
        <Container className="my-4 py-5">
          <Row className="text-white text-center">
            <Col sm={12} md={12} lg={4}>
              <h2 className="subHeading">Custom Web Design Solutions</h2>
              <p className="description">
                Crafting unique, visually appealing websites tailored to your
                brand's identity and goals.
              </p>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <h2 className="subHeading">Responsive Website Development</h2>
              <p className="description">
                Building adaptable websites that deliver optimal performance and
                user experience across all devices.
              </p>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <h2 className="subHeading">E-commerce Platform Integration</h2>
              <p className="description">
                Seamlessly integrating e-commerce solutions to enhance your
                online retail presence and customer engagement.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <Row>
          <Col className="text-center tag-block">
            <h1 className="headline">
              Crafted Code, Custom Solutions for Your Success
            </h1>
          </Col>
        </Row>
        <Row className="text-white text-center">
          <Col>
            <Image
              src={image6}
              height={200}
              width={350}
              className="rounded"
            ></Image>
            <h2 className="my-3 subHeading">Custom Website Design Solutions</h2>
            <p className="description">
              Our team crafts stunning, user-friendly websites tailored to your
              brand's unique identity.
            </p>
          </Col>
          <Col>
            <Image
              src={image7}
              height={200}
              width={350}
              className="rounded"
            ></Image>
            <h2 className="my-3 subHeading">E-commerce Development Services</h2>
            <p className="description">
              We build secure, scalable online stores that enhance your
              customers' shopping experience.
            </p>
          </Col>
          <Col>
            <Image
              src={image8}
              height={200}
              width={350}
              className="rounded"
            ></Image>
            <h2 className="my-3 subHeading">Responsive Web Applications</h2>
            <p className="description">
              Designing adaptive web apps that function seamlessly across all
              devices and platforms.
            </p>
          </Col>
        </Row>
      </Container>

      <div style={{ background: "#071322", padding: "5% 0%" }}>
        <Container className="my-4">
          <Row className="text-white text-center">
            <h1 className="headline">Elevate Your Online Presence Now.</h1>
          </Row>
          <Row className="text-white text-center py-5 align-items-center">
            <Col sm={12} md={12} lg={6}>
              <Image
                src={image9}
                height={"auto"}
                width={"100%"}
                className="rounded"
              ></Image>
            </Col>

            <Col sm={12} md={12} lg={6}>
              <h2 className="subHeading">
                Crafting Digital Experiences in Canada
              </h2>
              <p className="description">
                At Halifax Softwares, we specialize in creating innovative web
                designs and robust development solutions tailored to enhance
                your online presence. Based in Canada, our passionate team is
                dedicated to transforming your digital vision into reality with
                cutting-edge technology and creative strategies. Whether you're
                launching a new website or revamping an existing one, Halifax
                Softwares ensures a seamless journey from concept to completion.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
