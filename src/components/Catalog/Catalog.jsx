import { getCarsCatalog } from "../../redux/operationCarAPI";
import CardAuto from "../CardAuto/CardAuto";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCarsCatalog,
  selectIsPageCatalog,
} from "../../redux/selectorCatalog";
import { useState } from "react";
import Link from "../Link/Link";

const ContainerMain = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

const WrapLink = styled.div`
  width: 100%;
  text-align: center;
`;

const Catalog = () => {
  const countPages = useSelector(selectIsPageCatalog);
  const catalog = useSelector(selectIsCarsCatalog);
  const [pages, setPages] = useState(1);

  const dispatch = useDispatch();
  const limits = 12 * pages;
  const lastPage = Number.isInteger(countPages / 12);
  const catalogLenths = catalog.length;

  useEffect(() => {
    if (catalogLenths < limits && lastPage) {
      dispatch(getCarsCatalog(pages));
    }
  }, [dispatch, pages, limits, catalogLenths, lastPage]);

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setPages(pages + 1);
  };
  const infoCarRent = catalog.map(
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
  return (
    <div>
      <ContainerMain>
        {infoCarRent.map((item) => (
          <CardAuto key={item.id} data={item} />
        ))}
        <WrapLink>
          {lastPage !== false && catalogLenths !== 0 && (
            <Link onClick={handleButtonClick} text={"Load more"} />
          )}
        </WrapLink>
      </ContainerMain>
    </div>
  );
};

export default Catalog;
