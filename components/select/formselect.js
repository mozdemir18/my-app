import React, { useState,useEffect  } from "react";
import Select from 'react-select';

const FormSelect = ({
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
      zIndex: 1,
		}),
		control: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused? "#fff" : '#F5F6FA',
			height:'50px',
			borderRadius: 4,
			border: 0,
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '14px',
			outline: state.isFocused && 'none',
		}),
		container: (provided,state) => ({
			...provided,
			border: state.isFocused? '0.5px solid #F5F6FA ' : 0,
			height: '40px',
			borderRadius: 4,
		}),
		placeholder: ()=> ({
			marginBottom: '20px',
			paddingLeft: '10px',
		}),
		dropdownIndicator: ()=> ({
			marginBottom: '20px',
			paddingRight: '10px',
		}),
		input: ()=> ({
			marginBottom: '20px',
		}),
		singleValue: ()=> ({
			marginBottom: '20px',
      paddingLeft: '10px',
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
    } 
}

export default FormSelect;