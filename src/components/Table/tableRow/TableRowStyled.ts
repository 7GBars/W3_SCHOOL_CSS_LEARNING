import styled from "styled-components";

import type {TRowConfig} from "../types";

export const TableRow = styled.tr<{rowConfig: TRowConfig}>`
  height: ${({rowConfig: {height}}) => height}px;
  text-align: ${({rowConfig: {alignment}}) => alignment};
  vertical-align: ${({rowConfig: {verticalAlign}}) => verticalAlign};
  &:nth-child(even) { background-color: #f2f2f2; }
  &:hover { 
    background-color: #ddd;
  }
`;
