import angel_cake from "/cake_pictures/angel_cake.jpg";
import cake_roll from "/cake_pictures/cake_roll.jpg";
import earl_grey_cake from "/cake_pictures/earl_grey_cake.jpg";
import earl_grey_cake2 from "/cake_pictures/earl_grey_cake2.jpg";
import matcha_cake from "/cake_pictures/matcha_cake.jpg";
import matcha_cake2 from "/cake_pictures/matcha_cake2.jpg";
import pandan_coconut_cake from "/cake_pictures/pandan_coconut_cake.jpg";
import strawberry_cake from "/cake_pictures/strawberry_cake.jpeg";
import matcha_slice from "/cake_pictures/matcha_slice.jpg";
import logo from "/main_logo.jpg";

const cakeImage = (cake) => {
  const cakeID = cake.toLowerCase();

  switch (cakeID) {
    case "logo":
      return logo;

    case "angel cake":
      return angel_cake;

    case "cake roll":
      return cake_roll;

    case "matcha cake":
      return matcha_cake;

    case "earl grey cake 2":
      return earl_grey_cake2;

    case "matcha cake 2":
      return matcha_cake2;

    case "earl grey cake":
      return earl_grey_cake;

    case "pandan coconut cake":
      return pandan_coconut_cake;

    case "strawberry cake":
      return strawberry_cake;

    case "matcha slice":
      return matcha_slice;

    default:
      break;
  }
};
export default cakeImage;
