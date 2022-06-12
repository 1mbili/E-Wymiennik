import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState  } from 'react';
import Select from 'react-select';
import "./UserPage.css";

const SelectComponent = (props) => {
    const options = [
        { value: 'ilosc_usd', label: 'USD' },
        { value: 'ilosc_chf', label: 'CHF' },
        { value: 'ilosc_eur', label: 'EUR' },
        { value: 'ilosc_gbp', label: 'GBP' },
        { value: 'ilosc_jpy', label: '100JPY' },
        { value: 'ilosc_chn', label: 'CHN' }
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

export default SelectComponent;
