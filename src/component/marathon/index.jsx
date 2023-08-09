import React from 'react'
import Wrapper from './style'

export const Marathon = () => {


  

  return (
    <Wrapper>
        <form>
            <h1>विराट वैश्य महा मैराथन</h1>
            <input type="text" placeholder='Name' />
            <input type="tel" placeholder='Contact' />
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
            <input type="text" placeholder='Address' />
            <input type="button" value="Apply" />
        </form>
    </Wrapper>
  )
}
