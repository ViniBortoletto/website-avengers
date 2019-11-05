import styled from "styled-components";

export const LineStyle = styled.div`
  width: ${props => (props.width ? props => props.width : "80vw")};
  height: 1px;

  margin: 5px 0 5px 0;

  opacity: ${props => props.opacity};

  background: ${props =>
    props.background
      ? props => props.background
      : "linear-gradient(to right, transparent, #f0f0f0, transparent)"};
`;
