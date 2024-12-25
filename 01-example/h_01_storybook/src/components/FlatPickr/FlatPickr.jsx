import React from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// https://flatpickr.js.org/

type FlatPickrComponentProps = {
  defaultDate: number,
  onChange: (selectedDate: string) => void,
};

const FlatPickrComponent: React.FC<FlatPickrComponentProps> = (props) => {
  const { onChange, defaultDate } = props;
  console.log(defaultDate);

  const onChangeRef = React.useRef();
  onChangeRef.current = onChange;

  const inputRef = React.useRef(null);
  const flatRef = React.useRef(null);
  React.useEffect(() => {
    const fr = flatpickr(inputRef.current, {
      onChange(selectedDates) {
        onChangeRef.current?.(selectedDates[0]);
      },
    });
    flatRef.current = fr;
    return () => {
      fr.destroy();
    };
  }, []);

  React.useEffect(() => {
    flatRef.current.setDate(defaultDate);
  }, [defaultDate]);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FlatPickrComponent;
