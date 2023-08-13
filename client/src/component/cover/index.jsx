import React from 'react'

import Wrapper from './style'
import { Link } from 'react-router-dom'
import Team from '../team'

export const Cover = () => {
  
  return (
    <Wrapper>
        <p>कार्यक्रम</p>
        <h1 className='date'>17  सितम्बर  2023, रविवार</h1>
        <h1 className='time'>सुबह 10:15 बजे से</h1>
        <h1 className='place'>स्थान: वि.टी. रोड, मानसरोवर ग्राउंड, जयपुर </h1>
        <Link to="/marathon">Marathon Registration</Link>
        
    </Wrapper>
  )
}
