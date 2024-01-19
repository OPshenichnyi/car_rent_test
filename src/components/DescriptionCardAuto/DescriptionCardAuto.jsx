import styled from "styled-components";
import sprite from "../../../images/sprite.svg";
import variables from "../common/Variables";

const DescriptionCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 4px;
  color: ${variables.greyColor};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-right: 6px;
  }
`;

const DescriptionCardAuto = ({ data }) => {
  return (
    <div>
      <DescriptionCard>
        {Object.entries(data).map(([, value], index, array) => (
          <li key={index}>
            <span>{value}</span>
            {index !== array.length - 1 && (
              <svg width={2} height={16}>
                <use href={`${sprite}#line`} />
              </svg>
            )}
          </li>
        ))}
      </DescriptionCard>
    </div>
  );
};

export default DescriptionCardAuto;
