import { useState, useCallback, useMemo } from 'react';
import CityAreaData from '@/data/CityAreaData.json';

const cityOptions = Object.keys(CityAreaData);

const RegionSelect = () => {
  const [cityValue, setCityValue] = useState('');
  const [areaValue, setAreaValue] = useState('');

  const onChangeCity = useCallback((e) => {
    setCityValue(e.target.value);
    setAreaValue('');
  }, []);

  const onChangeArea = useCallback((e) => {
    setAreaValue(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    setCityValue('');
    setAreaValue('');
  }, []);

  /* // TODO
  const { areaOptions, zip } = useMemo(() => {
    const areas = cityValue === '' ? [] : CityAreaData[cityValue];
    let findZip = '';
    if (areaValue !== '') {
      findZip = areas.find(({ name }) => name === areaValue).zip;
    }
    return {
      areaOptions: areas.map(({ name }) => name),
      zip: findZip,
    };
  }, [cityValue, areaValue]);
  // */

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
