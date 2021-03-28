import styled from "@emotion/styled";
import SwcLogo from "../public/assets/swc-logo.svg";

const Logo = styled(SwcLogo)`
  width: 200px;

  @media (min-width: 640px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`;

const MainLogo = () => <Logo />;

export default MainLogo;
