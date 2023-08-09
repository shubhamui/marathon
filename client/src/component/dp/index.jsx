import React, { useRef, useState } from 'react'
import html2canvas from "html2canvas"
import Wrapper from './style'


export const Dp = () => {

    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [photoUrl, setPhotoUrl] = useState()

    const dp1 = useRef()

    const downloadURI = (uri, name) => {
        let link = document.createElement("a")
        link.download = name
        link.href = uri
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }

    const download = () => {
        html2canvas(dp1.current).then(function(canvas) {
            downloadURI(canvas.toDataURL(), 'MarathonDP')
            // window.location = canvas.toDataURL()
        });
    }

  return (
    <Wrapper>
        <h1>Dp Generator</h1>
        <div className="dp">
            <div className="dp1" ref={dp1}>
                <h1>{name}</h1>
                <p>{designation}</p>
                <img draggable="true" onDragStart={e => {}} src={photoUrl} alt="" />
            </div>
        </div>

        <div className="inputs">
            <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Designation' value={designation} onChange={e => setDesignation(e.target.value)} />
            <input type="file" placeholder='Upload Photo' onChange={e => setPhotoUrl(URL.createObjectURL(e.target.files[0]))}  />
            <input type="button" value="Download" onClick={download} />
        </div>
    </Wrapper>
  )
}
