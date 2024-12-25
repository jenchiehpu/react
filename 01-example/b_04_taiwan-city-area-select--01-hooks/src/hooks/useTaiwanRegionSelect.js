import React, { useCallback, useState, useMemo } from 'react';
import CityAreaData from '@/data/CityAreaData.json';

const cityOptions = Object.keys(CityAreaData);

type UseTaiwanRegionSelect = {
  cityValue: string,
  areaValue: string,
  onChangeCity: (event: React.FormEvent<HTMLSelectElement>) => void,
  onChangeArea: (event: React.FormEvent<HTMLSelectElement>) => void,
  onReset: () => void,
  cityOptions: string[],
  areaOptions: string[],
};

export default function useTaiwanRegionSelect(): UseTaiwanRegionSelect {
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

  return {
    cityValue,
    areaValue,
    zip,
    onChangeCity,
    onChangeArea,
    onReset,
    //
    cityOptions,
    areaOptions,
  };
}
