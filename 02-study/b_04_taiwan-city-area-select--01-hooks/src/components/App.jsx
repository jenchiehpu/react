import useTaiwanRegionSelect from '@/hooks/useTaiwanRegionSelect';

const RegionSelect = () => {
  // prettier-ignore
  const {
    cityValue,
    areaValue,
    zip,
    onChangeCity,
    onChangeArea,
    onReset,
    cityOptions,
    areaOptions,
  } = useTaiwanRegionSelect();

  return (
    <div className="container">
      <h2>
        city:{cityValue}, area: {areaValue}, zip: {zip}
      </h2>
      <div>
        <label>縣市</label>
        <select value={cityValue} onChange={onChangeCity}>
          <option value="" disabled>
            請選擇
          </option>
          {cityOptions.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>地區</label>
        <select value={areaValue} onChange={onChangeArea}>
          <option value="" disabled>
            請選擇
          </option>
          {areaOptions.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>zip</label>
        <input type="text" readOnly value={zip} />
      </div>
      <button onClick={onReset} type="button">
        Reset
      </button>
    </div>
  );
};
export default RegionSelect;
