import React, { useState,useEffect  } from "react";
import Select from 'react-select';

const MultiSelect = ({
    field,
    form,
    options,
    isMulti = false,
    placeholder = 'Select'
}) => {
    function onChange(option) {
        form.setFieldValue(
            field.name,
            option ? (option).map((item) => item.value) : [],
        );
    }

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter((option) => field.value.indexOf(option.value) >= 0)
                : options.find((option) => option.value === field.value);
        } else {
            return isMulti ? [] : ('');
        }
    };

    const BloodStyles = {
        menu: (provided, state) => ({
          ...provided,
                background:  state.isFocused && '#fff',
                border: '1px solid #ccc;',
                zIndex: 1,
        }),
        control: (provided, state) => ({
          ...provided,
          backgroundColor: "#fff",
                border: '1px solid #ccc;',
          borderRadius: 4,
                height: '43px',
          border: 0,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          outline: state.isFocused && 'none',
                paddingLeft: '5px',
                paddingRight: '5px'
        }),
        container: (provided,state) => ({
          ...provided,
                border: '1px solid #ccc;',
          height: '45px',
          borderRadius: 4,
        }),
        placeholder: ()=> ({
                color: '#ccc'
        }),
        dropdownIndicator: ()=> ({
                color: '#ccc'
        }),
        input: ()=> ({
        }),
        singleValue: ()=> ({
        })
      }

    if (!isMulti) {
        return (
            <Select
                options={options}
                name={field.name}
                instanceId="postType"
                styles={BloodStyles}
                value={options ? options.find(option => option.value === field.value) : ''}
                onChange={(option) => form.setFieldValue(field.name, option.value)}
                onBlur={field.onBlur}
                placeholder={placeholder}
            />
        )
    } else {
        return (
            <Select
                className="react-select-container"
                classNamePrefix="react-select"
                name={field.name}
                value={getValue()}
                onChange={onChange}
                options={options}
                styles={BloodStyles}
                isMulti={true}
                placeholder={placeholder}
            />
        )
    }
}

export default MultiSelect;