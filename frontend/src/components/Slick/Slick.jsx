import Slider from "react-slick";
import gallery_picture_1 from "/gallery_pictures/gallery_picture_1.jpg";
import gallery_picture_2 from "/gallery_pictures/gallery_picture_2.jpg";
import gallery_picture_3 from "/gallery_pictures/gallery_picture_3.jpg";
import gallery_picture_5 from "/gallery_pictures/gallery_picture_5.jpg";
import gallery_picture_6 from "/gallery_pictures/gallery_picture_6.jpg";
import gallery_picture_7 from "/gallery_pictures/gallery_picture_7.jpg";
import gallery_picture_8 from "/gallery_pictures/gallery_picture_8.jpg";
import gallery_picture_9 from "/gallery_pictures/gallery_picture_9.jpg";
import gallery_picture_10 from "/gallery_pictures/gallery_picture_10.jpg";

function Slick() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={gallery_picture_5} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_6} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_10} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_8} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_1} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_2} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_9} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_7} width="80%" />
      </div>
      <div>
        <img src={gallery_picture_3} width="80%" />
      </div>
    </Slider>
  );
}
export default Slick;
