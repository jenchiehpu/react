import React from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// https://flatpickr.js.org/

type FlatPickrComponentProps = {
  onChange: (selectedDate: string) => void,
};

const FlatPickrComponent: React.FC<FlatPickrComponentProps> = (props) => {
  const { onChange } = props;

  const onChangeRef = React.useRef();
  onChangeRef.current = onChange;

  const inputRef = React.useRef(null);
  React.useEffect(() => {
    flatpickr(inputRef.current, {
      onChange(selectedDates) {
        onChangeRef.current?.(selectedDates[0]);
      },
    });
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FlatPickrComponent;
