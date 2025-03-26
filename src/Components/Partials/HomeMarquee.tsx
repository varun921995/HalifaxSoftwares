import Marquee from "react-fast-marquee";
import { Image } from "react-bootstrap";
import image1 from "/img/home/image1.png";
import image2 from "/img/home/image2.png";
import image3 from "/img/home/image3.png";
import image4 from "/img/home/image4.png";
import image5 from "/img/home/image5.png";
const HomeMarquee = () => {
  return (
    <Marquee
      autoFill={true}
      speed={50}
      gradient={true}
      gradientColor="black"
      gradientWidth={100}
    >
      <Image src={image1} height={475} width={450} className="mx-1"></Image>
      <Image src={image2} height={475} width={450} className="mx-1"></Image>
      <Image src={image3} height={475} width={450} className="mx-1"></Image>
      <Image src={image4} height={475} width={450} className="mx-1"></Image>
      <Image src={image5} height={475} width={450} className="mx-1"></Image>
    </Marquee>
  );
};

export default HomeMarquee;
