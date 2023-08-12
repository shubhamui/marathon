import React from 'react'
import Wrapper from './style'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import { Link, useNavigate } from 'react-router-dom';

export const Menu = ({setMenuOpen}) => {

    const navigate = useNavigate()
  const onRegisterClick = () => {
    if(!window.localStorage.getItem("registered")){
      navigate("/marathon")
    }
    else{
      alert("You are already applied")
    }
    setMenuOpen(false)
  }
  return (
    <Wrapper>
        <ul>
            <li onClick={e => setMenuOpen(false)}><Link to="/make-my-dp"><AddAPhotoTwoToneIcon />Create DP</Link></li>
            <li onClick={ onRegisterClick}><Link><DirectionsRunTwoToneIcon />Marathon Registration</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/volunteer"><VolunteerActivismTwoToneIcon />Be a Volunteer</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/support"><SupportAgentTwoToneIcon />Contact</Link></li>
        </ul>
    </Wrapper>
  )
}
