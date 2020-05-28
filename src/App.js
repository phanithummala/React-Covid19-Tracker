import React,{useState,useEffect} from 'react';


// import Cards from './Components/Cards/Cards';
// import Chart from './Components/Chart/Chart';
// import CountryPicker from './Components/CountryPicker/CountryPicker';

//Easy of importing component from single folder
import {Cards,Chart,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';
import CoronaImage from './Images/image.png'

function App() {

  const [FetchedData,SetFetchedData]=useState({});
  const [ country, setCountry ] = useState({});


  useEffect ( ()=>{

    async function fetchDataAsync(){

      const data=await fetchData();
       SetFetchedData(data);
        
    }
      fetchDataAsync();     

  },[]);

    const countryChangeHandler= async (c)=> {
      const fetchdedCountryData=await fetchData(c);
      setCountry(c);
      SetFetchedData(fetchdedCountryData);
    }

  return (
    <div className={styles.container}>

      <img src={CoronaImage} alt="" className={styles.image}/>

      <Cards data={FetchedData}/>
      <CountryPicker countryChangeHandler={countryChangeHandler}/>
      <Chart data={ FetchedData } country={ country }/>  

    </div>
  );
}

export default App;
