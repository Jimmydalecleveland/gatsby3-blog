import styled from "@emotion/styled";

type TypographyProps = {
  center?: boolean;
};

const Typography = styled.p<TypographyProps>`
  text-align: ${(props) => (props.center ? "center" : "initial")};
`;
export default Typography;
