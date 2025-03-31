import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import "../assets/css/home.css";
import HomeMarquee from "./Partials/HomeMarquee";
import image6 from "/img/home/image6.png";
import image7 from "/img/home/image7.png";
import image8 from "/img/home/image8.png";
import image9 from "/img/home/image9.png";
import image10 from "/img/halifax-tech/image2.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center tag-block">
            <h1 className="headline">Professional Web Development Services</h1>
            <h6 className="text-white description lh-base">
              We tackle and preempt IT challenges by offering robust, customized
              software solutions that ensure peak performance and success.
            </h6>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="auto">
            <Button className="btn btn-md px-4 py-2 unleash-potential-btn">
              Contact Us
            </Button>
          </Col>
          <Col xs="auto">
            <h6 className="text-white description pt-2">
              <b>
                Book a Call with Our Digital Business Expert
                <FaLongArrowAltRight className="mx-2" />
              </b>
            </h6>
          </Col>
        </Row>
      </Container>
      <div className="my-4">
        <HomeMarquee></HomeMarquee>
      </div>
      <div style={{ background: "#071322" }}>
        <Container className="my-4 py-5">
          <Row className="text-white text-center">
            <Col sm={12} md={12} lg={4}>
              <h2 className="subHeading">Custom Web Design Solutions</h2>
              <h6 className="description lh-base  mb-5">
                Crafting unique, visually appealing websites tailored to your
                brand's identity and goals.
              </h6>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <h2 className="subHeading">Responsive Website Development</h2>
              <h6 className="description lh-base  mb-5">
                Building adaptable websites that deliver optimal performance and
                user experience across all devices.
              </h6>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <h2 className="subHeading">E-commerce Platform Integration</h2>
              <h6 className="description lh-base  mb-5">
                Seamlessly integrating e-commerce solutions to enhance your
                online retail presence and customer engagement.
              </h6>
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
            <h6 className="description lh-base mb-5">
              Our team crafts stunning, user-friendly websites tailored to your
              brand's unique identity.
            </h6>
          </Col>
          <Col>
            <Image
              src={image7}
              height={200}
              width={350}
              className="rounded"
            ></Image>
            <h2 className="my-3 subHeading">E-commerce Development Services</h2>
            <h6 className="description lh-base  mb-5">
              We build secure, scalable online stores that enhance your
              customers' shopping experience.
            </h6>
          </Col>
          <Col>
            <Image
              src={image8}
              height={200}
              width={350}
              className="rounded"
            ></Image>
            <h2 className="my-3 subHeading">Responsive Web Applications</h2>
            <h6 className="description lh-base  mb-5">
              Designing adaptive web apps that function seamlessly across all
              devices and platforms.
            </h6>
          </Col>
        </Row>
      </Container>

      <div style={{ background: "#071322", padding: "5% 0%" }}>
        <Container className="my-4">
          <Row className="text-white text-center">
            <h1 className="headline">Elevate Your Online Presence Now.</h1>
          </Row>
          <Row className="text-white  py-5 align-items-center">
            <Col sm={12} md={12} lg={6}>
              <Image
                src={image9}
                height={"auto"}
                width={"100%"}
                className="rounded"
              ></Image>
            </Col>

            <Col sm={12} md={12} lg={6} className="pt-3">
              <h2 className="subHeading">
                Crafting Digital Experiences in Canada
              </h2>
              <h6 className="description lh-base  mb-5">
                At Halifax Softwares, we specialize in creating innovative web
                designs and robust development solutions tailored to enhance
                your online presence. Based in Canada, our passionate team is
                dedicated to transforming your digital vision into reality with
                cutting-edge technology and creative strategies. Whether you're
                launching a new website or revamping an existing one, Halifax
                Softwares ensures a seamless journey from concept to completion.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <Row className="align-items-center text-white">
          <Col sm={12} md={6} className="my-2">
            <h1 className="headline">Build Your Brand with Us.</h1>
            <h6 className="description lh-base">
              Elevate your online presence with Halifax Softwares' expert web
              design and development services, tailored for Canadian businesses.
            </h6>
            <Button className="btn  btn-md my-2 unleash-potential-btn">
              Unlease Potential
            </Button>
          </Col>
          <Col sm={12} md={6} className="my-2">
            <Image
              src={image10}
              height={"auto"}
              width={"100%"}
              className="rounded"
            ></Image>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#071322", padding: "5% 0%" }}>
        <Container fluid className="my-5">
          <Row className="text-center text-white">
            <h1 className="headline">Four ways we can work together</h1>
          </Row>
          <Row className="align-items-stretch">
            <Col sm={12} md={3} className="my-2">
              <Card className="p-4 h-100 d-flex flex-column card-bg text-white">
                <Card.Body className="d-flex flex-column flex-grow-1 card-border-left">
                  <Card.Title className="subHeading">
                    <h3>Fixed Price</h3>
                  </Card.Title>
                  <Card.Text className="description flex-grow-1 d-flex align-items-start">
                    Best for companies who have a strictly defined project
                    scope, and who want to set an airtight budget.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} className="my-2">
              <Card className="p-4 h-100 d-flex flex-column  card-bg text-white">
                <Card.Body className="d-flex flex-column flex-grow-1  card-border-left">
                  <Card.Title className="subHeading">
                    <h3>Time & Material</h3>
                  </Card.Title>
                  <Card.Text className="description flex-grow-1 d-flex align-items-start">
                    Best for companies who haven’t defined clear project
                    specifications yet, or whose needs keep changing.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} className="my-2">
              <Card className="p-4 h-100 d-flex flex-column  card-bg text-white">
                <Card.Body className="d-flex flex-column flex-grow-1  card-border-left">
                  <Card.Title className="subHeading">
                    <h3>Dedicated Team</h3>
                  </Card.Title>
                  <Card.Text className="description flex-grow-1 d-flex align-items-start">
                    Best for companies who lack the internal skills they need to
                    meet their ongoing software development needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3} className="my-2">
              <Card className="p-4 h-100 d-flex flex-column  card-bg text-white">
                <Card.Body className="d-flex flex-column flex-grow-1  card-border-left">
                  <Card.Title className="subHeading">
                    <h3>Become our Partner</h3>
                  </Card.Title>
                  <Card.Text className="description flex-grow-1 d-flex align-items-start">
                    Partner with us to leverage our technology expertise,
                    enhance your offerings, and expand your business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ padding: "5% 0%" }}>
        <h1 className="subHeading">EastCoast Digital</h1>
      </div>
    </>
  );
};

export default Home;
