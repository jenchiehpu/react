import React from 'react';

type FunctionalCardProps = {
  img: string,
  name: string,
  children: React.ReactNode,
};

const FunctionalCardFlow: React.FC<FunctionalCardProps> = (props) => {
  const { img, name, children } = props;
  return (
    <div className="category-item">
      <img className="category-item__img" src={img} alt={name} />
      <div className="category-item__name">{name}</div>
      <div className="category-item__quote">{children}</div>
    </div>
  );
};

export default FunctionalCardFlow;
