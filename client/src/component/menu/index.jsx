import React from 'react'
import Wrapper from './style'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import { Link, useNavigate } from 'react-router-dom';

export const Menu = ({setMenuOpen}) => {

  const navigate = useNavigate()

  const onVolunteerClick = () => {
    if(!window.localStorage.getItem("REGISTERED")){
      navigate("/volunteer")
      
    }else{
      alert('Already applied !')
    }
    setMenuOpen(false)
    
  }
  return (
    <Wrapper>
        <ul>
            <li onClick={e => setMenuOpen(false)}><Link to="/make-my-dp"><AddAPhotoTwoToneIcon />Create DP</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/marathon"><DirectionsRunTwoToneIcon />Marathon Registration</Link></li>
            <li onClick={onVolunteerClick}><Link><VolunteerActivismTwoToneIcon />Be a Volunteer</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/support"><SupportAgentTwoToneIcon />Contact</Link></li>
        </ul>
    </Wrapper>
  )
}
