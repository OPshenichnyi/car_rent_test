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

const CardAuto = (value) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    mileage,
    option,
    city,
    country,
  } = value.data;

  const [addLike, setAddLike] = useState(null);

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
        <img src={img} alt="Foto auto" width={274} height={268} />
      </WrapImg>
      <TitleCard>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <h3>{rentalPrice}</h3>
      </TitleCard>
      <WrapDescription>
        <DescriptionCardAuto data={{ city, country, rentalCompany }} />
        <DescriptionCardAuto data={{ type, make, mileage, option }} />
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
