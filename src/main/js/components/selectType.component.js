import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState  } from 'react';
import Select from 'react-select';
import "./UserPage.css"

const SelectTypeComponent = (props) => {
    const options = [
        { value: 'Chcę Kupić', label: 'Chcę Kupić' },
        { value: 'Chcę Sprzedać', label: 'Chcę Sprzedać' },
      ]
      const [selectedOption, setSelectedOption] = useState(null);
      const passwordChangeHandler = (result) => {
        console.log(result)
        setSelectedOption(result.label)
        props.onSelect(result.value);
      };

  return (
      <Select
        defaultValue={selectedOption}
        onChange={passwordChangeHandler}
        options={options}
      />
  );
}

export default SelectTypeComponent;
