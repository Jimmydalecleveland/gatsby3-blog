import styled from "@emotion/styled";

const SearchBox = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space.$4};
  background: ${({ theme }) => theme.colors.$desaturated};
  font-size: ${({ theme }) => theme.fontSizes.$3};
  border-radius: 5px;
  border: none;
`;

export default SearchBox;
