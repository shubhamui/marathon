import {useState } from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router'
import { services } from '../../services'
import axios from  'axios' 


export const Marathon = () => {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  

  const failedToGet = () => {
    alert("Please allow location acces.!!")
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet)
  }

  const getUserLoc = () => {
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet)    
  }



  const display = () => {
    if(name.length <2){
      alert("Enter a valid name")
    }
    else if(contact.length!==10){
      alert("Enter a valid contact")
    }
    else if(address.length < 5){
      alert("Enter full address")
    }
    else{
      getUserLoc()
      }
  }




    const getLocation = (position) => {
      localStorage.setItem("registered", true)
      alert("Registered Successfully...!!!")
      axios.post('https://marathon2k23.onrender.com/api/user/add',{
        name: name,
        contact: contact,
        address: address,
        role: "user",
        accepted: false,
        location : [position.coords.latitude, position.coords.longitude]
      })
      .then(res =>{ 
          console.log(res)

        }
      )
      .catch( err => {
        console.log(err)
      }
      )
      navigate("/")
  }
  
   




  return (
    <Wrapper>
        <form>
            <h1>विराट वैश्य महा मैराथन</h1>
            <input 
              type="text" 
              placeholder='Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />

            <input 
              type="tel" 
              placeholder='Contact' 
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <select>
                <option value={null} disabled selected>-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <select>
                <option value={null} selected disabled>-- Select T-shirt Size --</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
            </select>
            <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
            <input list = "cities" id = "city" placeholder='--Select a city--'/>
            <datalist id="cities">
              {
                services.cities.map((city,index) => {
                  return (
                    <option key={index} value={city} />
                 )

                })
              }
            </datalist>
            <input type="button" value="Apply" onClick={display}/>
            
        </form>

    </Wrapper>
  )
}
