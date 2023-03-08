import React, {useCallback, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import Link from 'next/link'

const homeSearch =({ countries, professions })=>{
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

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

    const onChangeBranch = useCallback((event) => {
        const query = event.target.value;
        setQuery(query)
        if (query.length) {
              setResults(professions)
        } else {
          setResults([])
        }
    }, [])
    
    const onFocusBranch = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClickBranch)
    }, [])

    const onClickBranch = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setActive(false)
          window.removeEventListener('click', onClick)
        }
      }, [])

    return(
        <section className="section section-search">
            <div className="container-fluid">
                <div className="banner-wrapper">
                    <div className="banner-header text-center">
                        <h1>Search Doctor, Make an Appointment</h1>
                        <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                    </div>
                    <div className="search-box">
                        <form action="/doctor" method='get'>
                            <div className="form-group search-location">
                                <Select styles={BloodStyles} options={countries} instanceId="postType" placeholder="Country" />
                            </div>
                            <div className="form-group search-info">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Find specialist doctor" 
                                onChange={onChangeBranch}
                                onFocus={onFocusBranch}
                                value={query}
                                />
                                { active && results.length > 0 && (
                                    <ul style={{backgroundColor: '#fff', listStyle: 'none', maxHeight: '100px', overflow: 'scroll'}}>
                                    {results.map(({ id, name }) => (
                                        <li key={id} className="pt-2 pb-2">
                                            <a>{name}</a>
                                        </li>
                                    ))}
                                    </ul>
                                ) }
                            </div>
                            <button type="submit" className="btn btn-primary search-btn mt-0">  
                                <FontAwesomeIcon icon={faSearch} /> <span>Search</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}




export default homeSearch;
  
    