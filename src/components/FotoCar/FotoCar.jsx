import styled from "styled-components";

export const WrapImg = styled.div`
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

const FotoCar = ({ src, width, height }) => {
  return (
    <>
      <WrapImg>
        <img src={src} alt="Foto auto" width={width} height={height} />
      </WrapImg>
    </>
  );
};

export default FotoCar;
