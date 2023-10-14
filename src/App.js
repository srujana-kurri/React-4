"use client"
import { useEffect, useState } from 'react';
import './App.css';
import Table from './table';
import axios from 'axios';
function App() {
  const [userdata,setUserdata] = useState([]);
  const getData = async ()=>{
    try{
      const res = await axios.get("https://dummyjson.com/users");
      setUserdata(res.data.users);
    }
    catch(error){
      console.error("Error fetching the data",error);
    }
  }
  useEffect(()=>{
    getData();
  },[]);
  return (
    <div>
      <h1>Dummy Data</h1>
      <Table data = {userdata}/>
    </div>
  );
}

export default App;
