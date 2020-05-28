import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (country)=> {
    let countryURL=url;
    if(country){
        countryURL=`${url}/countries/${country}`;
    }
    try{
        //Normal way of parsing data
        //const {data}=await axios.get(url);
       
        // const modifiedData={
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate
        // }

        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(countryURL);
        const modifiedData={confirmed,recovered,deaths,lastUpdate}


        return modifiedData
    }
    catch(error){

    }
  
};

export const fetchDailyData = async ()=>{
    try{
        const { data }=await axios.get(`${url}/daily`);
        const modifieDailyData= data.map((dailyData) => (
            { confirmed: dailyData.confirmed.total, 
              deaths: dailyData.deaths.total, 
              date:dailyData.reportDate }));
         return modifieDailyData;
    }
    catch(error){

    }
    
}

export const fetchCountriesData= async ()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);

        return countries.map((country)=> country.name);

    }
    catch(error){
        console.log(error);
    }
}

