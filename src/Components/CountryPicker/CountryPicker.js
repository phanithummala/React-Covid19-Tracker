import React ,{useState, useEffect}from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountriesData }  from '../../api';

function CountryPicker({countryChangeHandler}) {

    const [FetchedCountries,setFetchedCountries]=useState([]);

    useEffect(()=>{
        async function fetchCountriesAync(){
            const countries=await fetchCountriesData();
            setFetchedCountries(countries);
        }
        fetchCountriesAync();
    },[]);
    return (
        <>
            <FormControl className={styles.formControl}>
                <NativeSelect onChange={(e)=>countryChangeHandler(e.target.value)}>
                    <option value="">Global</option>
                        {FetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </>
    )
}

export default CountryPicker
