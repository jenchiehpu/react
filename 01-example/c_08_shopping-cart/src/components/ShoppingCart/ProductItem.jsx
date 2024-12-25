import React from 'react';

type ProductItemProps = {
  img: string,
  title: string,
  price: number,
  onAddToCart(id: string): void,
};
const ProductItem: React.FC<ProductItemProps> = (props) => {
  // prettier-ignore
  const {
    img,
    title,
    price,
    onAddToCart,
    id,
  } = props;

  const atClick = () => {
    onAddToCart(id);
  };
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title fs-6 fw-light">{title}</h5>
        <p className="price">${price}</p>
        <button className="btn btn-sm btn-warning fw-light" onClick={atClick}>
          Add
        </button>
      </div>
    </div>
  );
};
export default React.memo(ProductItem);
