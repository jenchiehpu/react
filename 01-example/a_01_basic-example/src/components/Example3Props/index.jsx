import FunctionalCard01 from './FunctionalCard01';
import FunctionalCardFlow from './FunctionalCardFlow';
import './style.scss';

const Example3 = () => {
  return (
    <section data-name="Example3">
      <FunctionalCard01 img="http://fakeimg.pl/500x300/3498db/" name="milkmidi" />
      <FunctionalCard01 img="http://fakeimg.pl/500x300/e74c3c/" name="奶綠茶">
        <h1>我是子元素</h1>
      </FunctionalCard01>

      <FunctionalCardFlow img="http://fakeimg.pl/500x300/2c3e50/" name="奶綠茶" />
    </section>
  );
};
export default Example3;
