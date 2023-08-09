import React from 'react'
import Wrapper from './style'
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import { Link } from 'react-router-dom';

export const Menu = ({setMenuOpen}) => {
  return (
    <Wrapper>
        <ul>
            <li onClick={e => setMenuOpen(false)}><Link to="/make-my-dp"><AddAPhotoTwoToneIcon />Create DP</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/marathon"><DirectionsRunTwoToneIcon />Marathon Registration</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/volunteer"><VolunteerActivismTwoToneIcon />Be a Volunteer</Link></li>
            <li onClick={e => setMenuOpen(false)}><Link to="/support"><SupportAgentTwoToneIcon />Contact</Link></li>
        </ul>
    </Wrapper>
  )
}
