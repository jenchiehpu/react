/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

//* // TODO
const FunctionalCard01 = (props) => {
  const { img, name, children } = props;
  return (
    <div className="category-item">
      <img className="category-item__img" src={img} alt={name} />
      <div className="category-item__name">{name}</div>
      <div className="category-item__quote">{children}</div>
    </div>
  );
};
// */

FunctionalCard01.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FunctionalCard01;
