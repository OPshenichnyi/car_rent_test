import styled from "styled-components";
import variables from "../common/Variables";

export const HeartSvg = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${variables.whitePrimary};
`;

const Heart = ({ props }) => {
  const { addLike, handleHeartClick, sprite } = props;

  return (
    <>
      {addLike === null ? (
        <HeartSvg width={18} height={18} onClick={handleHeartClick}>
          <use href={`${sprite}#heart-of`} />
        </HeartSvg>
      ) : (
        <HeartSvg width={18} height={18} onClick={handleHeartClick}>
          <use href={`${sprite}#heart-on`} />
        </HeartSvg>
      )}
    </>
  );
};

export default Heart;
