import img from "../../img/2007 Audi A4 3.2 FSI Quattro S-Line Sedan (UK) 001.jpg";
import styled from "styled-components";
import variables from "../common/Variables";
import DescriptionCardAuto from "../DescriptionCardAuto/DescriptionCardAuto";
import Button from "../Button/Button";

const Container = styled.div`
  margin: auto;
  width: 274px;
  /* border: 2px solid red; */
`;

const WrapImg = styled.div`
  position: relative;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  overflow: hidden;
  border: 1px solid #ccc;
  margin-bottom: 14px;
`;

const TitleCard = styled.div`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${variables.blackPrimary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  span {
    color: ${variables.bluePrimary};
  }
`;

const CardAuto = () => {
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
        <img src={img} alt="Foto auto" width={274} height={268} />
      </WrapImg>
      <TitleCard>
        <h3>
          Hummer <span>Enclave</span>, 2006
        </h3>
        <h3>$40</h3>
      </TitleCard>
      <DescriptionCardAuto data={data} />
      <DescriptionCardAuto data={first} />
      <Button text={"Save"} width={247} />
    </Container>
  );
};

export default CardAuto;
