import "./trending.css";
import Card from "./Card.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link} from "react-router-dom";
import Announcement from "../../../admin/Admincomponent/Announcement.jsx";

const Trending = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="main">
        <span>
          <a href="#" className="title-trend">
            Trending
          </a>
        </span>
        <hr className="hr-trending" />
        <div className="trending-topic">
          <Slider {...settings}>
      <Link to="Article"><Card
              title="CICS Week MLBB Tournament | Day 2"
              image="https://picsum.photos/200/300?image=279"
              image1="https://picsum.photos/200/300?image=278"
              image2="https://picsum.photos/200/300?image=179"
              image3="https://picsum.photos/200/300?image=273"
              image4="https://picsum.photos/200/300?image=292"
              subtitle="Best of 3 series - Semi Finals: DBTP faces
                off against WN.Stay tuned for more exciting 
                action and intense competition as 
                these teams..."
            /></Link>
            
            <Card
              title="CICS Week MLBB Tournament | Day 2"
              image="https://picsum.photos/200/300?image=29"
              image1="https://picsum.photos/200/300?image=78"
              image2="https://picsum.photos/200/300?image=79"
              image3="https://picsum.photos/200/300?image=73"
              image4="https://picsum.photos/200/300?image=92"
              subtitle="Best of 3 series - Semi Finals: DBTP faces
                off against WN.Stay tuned for more exciting 
                action and intense competition as 
                these teams..."
            />
            <Card
              title="CICS Week MLBB Tournament | Day 2"
              image="https://picsum.photos/200/300?image=9"
              image1="https://picsum.photos/200/300?image=2"
              image2="https://picsum.photos/200/300?image=1"
              image3="https://picsum.photos/200/300?image=3"
              image4="https://picsum.photos/200/300?image=290"
              subtitle="Best of 3 series - Semi Finals: DBTP faces
                off against WN.Stay tuned for more exciting 
                action and intense competition as 
                these teams..."
            />
            <Card
              title="CICS Week MLBB Tournament | Day 2"
              image="https://picsum.photos/200/300?image=119"
              image1="https://picsum.photos/200/300?image=128"
              image2="https://picsum.photos/200/300?image=179"
              image3="https://picsum.photos/200/300?image=123"
              image4="https://picsum.photos/200/300?image=122"
              subtitle="Best of 3 series - Semi Finals: DBTP faces
                off against WN.Stay tuned for more exciting 
                action and intense competition as 
                these teams..."
            />
          </Slider>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Trending;
