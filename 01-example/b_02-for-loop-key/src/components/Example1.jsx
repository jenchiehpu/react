import React from 'react';

const Item = React.memo((props) => {
  const { onDelete, color } = props;
  const colorRef = React.useRef(color);

  React.useEffect(() => {
    const c = colorRef.current;
    return () => {
      console.log(`%cComponent unmounted:${c}`, `font-size:20px;color:black;background:${c}`);
    };
  }, []);

  React.useEffect(() => {
    const c = colorRef.current;
    console.log(`%cComponent update:${c}`, `font-size:16px;color:${c}`);
  });

  return (
    <div className="box" data-name={colorRef.current} style={{ backgroundColor: colorRef.current }}>
      <input type="text" />
      <button onClick={() => onDelete(color)}>Delete</button>
      <span className="px-2">{color}</span>
    </div>
  );
});

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink'];

const KeyExample0 = () => {
  const [selectValue, setSelectValue] = React.useState('uniqKey');
  const [list, setList] = React.useState(COLORS);
  const atRemoveContent = React.useCallback((color) => {
    setList((prevList) => prevList.filter((c) => c !== color));
  }, []);
  const atSelectChange = (e) => {
    setSelectValue(e.target.value);
    setList(COLORS);
  };
  return (
    <section data-name="KeyExample1">
      <h3>
        <select value={selectValue} onChange={atSelectChange}>
          <option value="uniqKey">使用 Content 當唯一的 key 值</option>
          <option value="indexKey">使用 index 當 key 值</option>
        </select>
      </h3>
      <div>
        {list.map((color, index) => {
          return (
            <Item
              key={selectValue === 'uniqKey' ? color : index}
              color={color}
              onDelete={atRemoveContent}
            />
          );
        })}
      </div>
    </section>
  );
};

export default KeyExample0;
