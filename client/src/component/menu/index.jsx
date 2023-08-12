import React from 'react'
import Wrapper from './style'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import { Link, useNavigate } from 'react-router-dom';

export const Menu = ({setMenuOpen}) => {

<<<<<<< HEAD
  const navigate = useNavigate()

  const onVolunteerClick = () => {
    if(!window.localStorage.getItem("REGISTERED")){
      navigate("/volunteer")
      
    }else{
      alert('Already applied !')
    }
    setMenuOpen(false)
    
=======
    const navigate = useNavigate()
  const onRegisterClick = () => {
    if(!window.localStorage.getItem("registered")){
      navigate("/marathon")
    }
    else{
      alert("You are already applied")
    }
    setMenuOpen(false)
>>>>>>> e19eb3c4ac144d98d66be2ef318aeb12dcc961fa
  }
  return (
    <Wrapper>
        <ul>
            <li onClick={e => setMenuOpen(false)}><Link to="/make-my-dp"><AddAPhotoTwoToneIcon />Create DP</Link></li>
<<<<<<< HEAD
            <li onClick={e => setMenuOpen(false)}><Link to="/marathon"><DirectionsRunTwoToneIcon />Marathon Registration</Link></li>
            <li onClick={onVolunteerClick}><Link><VolunteerActivismTwoToneIcon />Be a Volunteer</Link></li>
=======
            <li onClick={ onRegisterClick}><Link><DirectionsRunTwoToneIcon />Marathon Registration</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/volunteer"><VolunteerActivismTwoToneIcon />Be a Volunteer</Link></li>
>>>>>>> e19eb3c4ac144d98d66be2ef318aeb12dcc961fa
            <li onClick={e => setMenuOpen(false)}><Link to="/support"><SupportAgentTwoToneIcon />Contact</Link></li>
        </ul>
    </Wrapper>
  )
}
