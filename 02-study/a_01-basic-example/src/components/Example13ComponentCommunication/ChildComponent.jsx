const ChildComponent = (props) => {
  /* const {
    onCallParent, count,
  } = props;
  const atClick = () => {
    onCallParent('Hi, daddy');
  }; */
  return (
    <div className="child-component">
      <h3>ChildComponent</h3>
      <p>
        props.count:
        {count}
      </p>
      <button onClick={atClick}>call Parent</button>
    </div>
  );
};

export default ChildComponent;
