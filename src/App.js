import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react'
import {ethers} from 'ethers';
import abi from './abi.json';

function App() {
  const [contract, setContract] = useState();
  const [Value, setValue] = useState()
  const [inputItem, setInputItem] = useState();

  const contractExecution= async()=>{
    const provider= new ethers.BrowserProvider(window.ethereum)
    const signer= await provider.getSigner();
    const Contract= new ethers.Contract("0x6dd589F548f7b0f03523795C9008881741A0b27d",abi,signer)
    setContract(Contract)
    }
  const getValue= async()=>{
    if(contract){
    const res= await contract.val();
    setValue(Number(res))
    }
  }
  useEffect(() => {
    contractExecution();
  }, [])
  
  const handleSubmit=async()=>{
    const res= await contract.getvalue(inputItem);
    }

  const enterValue=(e)=>{
    setInputItem(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <div>
        <p>Write the value you want to send:</p>
        <input onChange={enterValue} className='input'></input>
        <br></br>
        <button onClick={handleSubmit} className='generator'>Submit</button>
      </div>
      <div>
        <h1 className='value'>The value is:- {Value}</h1>
        <button onClick={getValue}className='switch'>Get the entered value</button>
      </div>
      </header>
    </div>
  );
}

export default App;
