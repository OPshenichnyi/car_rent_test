import { getFavoriteCars } from "../../redux/operationCarAPI";
import CardAuto from "../CardAuto/CardAuto";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFavorites } from "../../redux/selectorCatalog";

const ContainerMain = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

const Favorites = () => {
  const favorites = useSelector(selectIsFavorites);
  const dispatch = useDispatch();

  const infoCarRent = favorites.map(
    ({
      id,
      year,
      make,
      model,
      type,
      img,
      rentalPrice,
      rentalCompany,
      mileage,
      functionalities,
      address,
    }) => {
      const option = functionalities[0];

      function getLastTwoWords(address) {
        const words = address.split(" ").filter((word) => word.length > 0);
        if (words.length < 2) {
          return ["not found", "not found"];
        }
        return words.slice(-2);
      }
      const city = getLastTwoWords(address)[0];
      const country = getLastTwoWords(address)[1];
      return {
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
      };
    }
  );

  useEffect(() => {
    dispatch(getFavoriteCars());
  }, [dispatch]);
  return (
    <>
      <ContainerMain>
        {infoCarRent.map((item) => (
          <CardAuto key={item.id} data={item} />
        ))}
      </ContainerMain>
    </>
  );
};

export default Favorites;
