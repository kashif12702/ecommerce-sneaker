import sneakerOne from "../assets/images/sneakers/sneaker_1.png";
import sneakerTwo from "../assets/images/sneakers/sneaker_2.png";
import sneakerThree from "../assets/images/sneakers/sneaker_3.png";
import sneakerFour from "../assets/images/sneakers/sneaker_4.png";
import sneakerFive from "../assets/images/sneakers/sneaker_5.png";

const sneakerImagesArray = [
  sneakerOne,
  sneakerTwo,
  sneakerThree,
  sneakerFour,
  sneakerFive,
];

export function getRandomSneakerImage() {
  if (sneakerImagesArray.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * sneakerImagesArray.length);
  return sneakerImagesArray[randomIndex];
}
