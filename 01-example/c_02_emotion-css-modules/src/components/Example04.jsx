import styled from '@emotion/styled';
import { css } from '@emotion/react';

const PrimaryButton = styled.button`
  background: white;
  padding: 1em;
  font-size: 1em;
  border-radius: 3px;
  margin: 0 1em;
  border: 2px solid black;
  ${(props) =>
    props.primary &&
    css`
      background: #2ecc71;
    `}
  ${(props) =>
    props.second &&
    css`
      background: #e67e22;
    `}
`;

const Example = () => (
  <section data-name="example04">
    <PrimaryButton>PrimaryButton</PrimaryButton>
    <PrimaryButton primary>PrimaryButton primary</PrimaryButton>
    <PrimaryButton second>PrimaryButton second</PrimaryButton>
  </section>
);

export default Example;
