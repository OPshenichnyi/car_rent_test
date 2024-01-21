import DescriptionCardAuto from "../DescriptionCardAuto/DescriptionCardAuto";
import Button from "../Button/Button";
import Heart from "../Heart/Heart";
import FotoCar from "../FotoCar/FotoCar";
import Modal from "../Modal/Modal";
import sprite from "../../../images/sprite.svg";
import { useState } from "react";
import { Container, TitleCard, WrapDescription } from "./CardAuto.styled";
import { useEffect } from "react";

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
  const [isModal, setIsModal] = useState(false);

  const closeModalWindow = () => {
    setIsModal(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("favorites");
    if (localStorage.length !== 0) {
      const idCard = storedData.includes(id);
      if (idCard) {
        setAddLike(idCard);
      }
    }
  }, [id]);

  const handleHeartClick = () => {
    if (addLike === null) {
      setAddLike(true);
      addFavorites(id);
      return;
    }
    removeFavorites(id);
    setAddLike(null);
  };

  const addFavorites = (newItemId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(newItemId)) {
      favorites.push(newItemId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const removeFavorites = (remItemId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(remItemId)) {
      const updatedFavorites = favorites.filter((id) => id !== remItemId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleButtonClick = (evt) => {
    setIsModal(evt);
  };

  return (
    <Container>
      <FotoCar src={img} width={274} height={268} />
      <Heart props={{ addLike, handleHeartClick, sprite }} />
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
        type="button"
        text={"Learn more"}
        paddingVertical="12px"
        paddingHorizontal="99px"
        onClick={() => {
          handleButtonClick(id);
        }}
      />
      {isModal === id && (
        <Modal value={id} closeModalWindow={closeModalWindow}></Modal>
      )}
    </Container>
  );
};

export default CardAuto;
