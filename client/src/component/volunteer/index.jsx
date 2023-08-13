import React, { useState } from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router';
import { services } from '../../services';
import axios from 'axios'

export const Volunteer = () => {
    
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")


    const failedToGet = () => {
        alert("Please allow location acces.!!")
        setTimeout(getUserLoc, 3000)
    }
    
    const getUserLoc = () => {
            navigator.geolocation.getCurrentPosition( getLocation, failedToGet)    
    }

    const display = () => {
        if (name.length < 2){
            alert("Please enter a valid Name.")
        }
        else if (contact.length !== 10 ){
            alert("Please enter a valid Contact Number.") 
        }
        else if (address.length <3){
            alert("Please enter a valid address.")
        }
        else {
            getUserLoc()
        }
       
    }
    
    const getLocation = (position) => {
        console.log(position.coords)
        window.localStorage.setItem("REGISTERED", true)
            alert("Sucessfully Registered..!!")
            axios.post("https://marathon2k23.onrender.com/api/user/add", {
                name : name,
                contact : contact,
                address : address,
                role : 'volunteer',
                accepted : false,
                location : [position.coords.latitude, position.coords.longitude]
            })
            .then( res => {
                console.log(res)
            })
            .catch( err => {
                console.log(err)
            })
            navigate("/")
    }    

 return (
    <Wrapper>
        <form>
            <h1>विराट वैश्य महा मैराथन</h1>
            <input type="text" placeholder='Volunteer Name' value={name} onChange={ (e) => setName(e.target.value)}/>
            <input type="tel" placeholder='Contact' value={contact} onChange={ (e) => setContact(e.target.value)}/>
            <select required>
                <option value={null} disabled selected>-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <select required>
                <option value={null} selected disabled>-- Select T-shirt Size --</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
            </select>
            <input type="text" placeholder='Address'  value={address} onChange={ (e) => setAddress(e.target.value)}/>
            <input list="cities" id="city" placeholder='--Select City--' />
            <datalist id="cities" >
                    {
                    services.cities.map((city, index) => {
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
