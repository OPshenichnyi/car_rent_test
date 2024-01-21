import styled from "styled-components";
import variables from "../common/Variables";
import FotoCar from "../FotoCar/FotoCar";
import { useSelector } from "react-redux";
import { selectIsCarsCatalog } from "../../redux/selectorCatalog";
import DescriptionCardAuto from "../DescriptionCardAuto/DescriptionCardAuto";
import {
  CardModalContainer,
  TitleCard,
  WrapDescription,
  ContainerDescription,
  TitleAccessoires,
  ContainerAccessoires,
  ContainerRental,
  WrapText,
} from "./CardAutoModal.styled";
import Button from "../Button/Button";

const CardAutoModal = ({ value }) => {
  const state = useSelector(selectIsCarsCatalog);
  const infoCar = state.find((item) => item.id === value);
  const {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    accessories,
    rentalConditions,
  } = infoCar;

  function getLastTwoWords(address) {
    const words = address.split(" ").filter((word) => word.length > 0);
    if (words.length < 2) {
      return ["not found", "not found"];
    }
    return words.slice(-2);
  }
  const city = getLastTwoWords(address)[0];
  const country = getLastTwoWords(address)[1];
  const idTitle = "id: " + id;
  const yearTitle = "Year: " + year;
  const typeTitle = "Type: " + type;
  const fuelTitle = "Fuel Consumption " + fuelConsumption;
  const engineTitle = "Engine Size: " + engineSize;
  console.log(infoCar);
  console.log(rentalConditions);

  return (
    <CardModalContainer>
      <FotoCar src={img} width={461} height={248} />
      <TitleCard>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
      </TitleCard>
      <WrapDescription>
        <DescriptionCardAuto
          data={{ city, country, idTitle, yearTitle, typeTitle }}
        />
        <DescriptionCardAuto data={{ fuelTitle, engineTitle }} />
      </WrapDescription>
      <ContainerDescription>
        <p>{description}</p>
      </ContainerDescription>
      <TitleAccessoires>Accessories and functionalities:</TitleAccessoires>
      <ContainerAccessoires>
        <DescriptionCardAuto data={functionalities} />
        <DescriptionCardAuto data={accessories} />
      </ContainerAccessoires>
      <p>Rental Conditions:</p>
      <ContainerRental className="first-container">
        <WrapText>Minimum age : 25</WrapText>
        <WrapText>Valid driver’s license</WrapText>
      </ContainerRental>
      <ContainerRental className="second-container">
        <WrapText>Security deposite required </WrapText>
        <WrapText>Mileage: 5,858</WrapText>
        <WrapText>Price: 40$</WrapText>
      </ContainerRental>
      <Button
        type="button"
        text={"Rental car"}
        paddingVertical="12px"
        paddingHorizontal="50px"
      />
    </CardModalContainer>
  );
};

export default CardAutoModal;
