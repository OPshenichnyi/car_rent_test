import DescriptionCardAuto from "../DescriptionCardAuto/DescriptionCardAuto";
import Button from "../Button/Button";
import sprite from "../../../images/sprite.svg";
import { useState } from "react";
import {
  Container,
  WrapImg,
  HeartSvg,
  TitleCard,
  WrapDescription,
} from "./CardAuto.styled";

const CardAuto = () => {
  const [addLike, setAddLike] = useState(null);

  const id = 12;

  const handleHeartClick = () => {
    if (addLike === null) {
      setAddLike(id);
      localStorage.setItem("like", JSON.stringify(id));
      return;
    }
    setAddLike(null);
    localStorage.removeItem("like");
  };

  const handleButtonClick = () => {
    console.log("Кнопка натиснута");
  };

  const data = {
    city: "Kharkiv",
    country: "Ukraine",
    company: "Adventure Car Rentals",
  };

  const first = {
    type: "Suv",
    make: "Hummer",
    mileage: "9587",
    functionalities: "Stability control",
  };
  return (
    <Container>
      <WrapImg>
        {addLike === null ? (
          <HeartSvg width={18} height={18} onClick={handleHeartClick}>
            <use href={`${sprite}#heart-of`} />
          </HeartSvg>
        ) : (
          <HeartSvg width={18} height={18} onClick={handleHeartClick}>
            <use href={`${sprite}#heart-on`} />
          </HeartSvg>
        )}
        <img
          src="https://fs10.fex.net/preview/4837828553/0x0"
          alt="Foto auto"
          width={274}
          height={268}
        />
      </WrapImg>
      <TitleCard>
        <h3>
          Hummer <span>Enclave</span>, 2006
        </h3>
        <h3>$40</h3>
      </TitleCard>
      <WrapDescription>
        <DescriptionCardAuto data={data} />
        <DescriptionCardAuto data={first} />
      </WrapDescription>
      <Button
        text={"Learn more"}
        paddingVertical="12px"
        paddingHorizontal="99px"
        onClick={handleButtonClick}
      />
    </Container>
  );
};

export default CardAuto;
