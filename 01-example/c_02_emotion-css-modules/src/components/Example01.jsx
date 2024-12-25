// https://emotion.sh/docs/introduction
import { css } from '@emotion/css';

const rootStyle = css`
  width: 100%;
  background-color: green;
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
  h1 {
    font-size: 100px;
  }
`;

const Example = () => {
  return (
    <section data-name="example01" className={rootStyle}>
      <h1>hi emotion</h1>
      <button
        className={css`
          background: black;
          color: white;
        `}
      >
        Switch
      </button>
    </section>
  );
};
export default Example;
