import styled from '@emotion/styled';

const Button = styled.button`
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  &:hover {
    background: #3498db;
  }
`;

const Example = () => (
  <section data-name="example03">
    <Button>Unstyled, boring Link</Button>
  </section>
);

export default Example;
