import React, { useState } from 'react'
import axios from 'axios'
import { Wrapper } from './style'

export const Team = () => {
    const [teams, setTeams] = useState([{
        id : `team-1`,
        title : 'Shri Agarwal Samaj Samiti, Jaipur',
        order : 2,
        members : [{
            id : 'team-1-1',
            name : 'Chandraprakash Bhadewala',
            title : 'Chairman - Shri Agarwal Samaj Samiti, Jaipur',
            order : 1,
            photo : `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHot-Muggs-Abhiraj-Conical-Ceramic%2Fdp%2FB01CAD38V2&psig=AOvVaw1069A3Y_TRQMitjYyqJnEr&ust=1692019204768000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjgwu7c2YADFQAAAAAdAAAAABAD`
        }]
    },{
        id : `team-2`,
        title : 'Shri Gupta Samaj Samiti, Jaipur',
        order : 1,
        members : [{
            id : 'team-1-1',
            name : 'Shubham Gupta',
            title : 'Chairman - Shri Agarwal Samaj Samiti, Jaipur',
            order : 1,
            photo : `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fc%2Fshubhamguptag&psig=AOvVaw3hWzfpqVrh6KAVtjflYcoh&ust=1692019329750000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi2uKrd2YADFQAAAAAdAAAAABAE`
        }]
    }])
    // axios.get("https://marathon2k23.onrender.com/api/team/read")
    // .then(res => {
    //     setTeamData(res.data) 
    // })
    // .catch (err => {
    //     console.log(err)
    // })

    // teams.sort((a,b) => a.order-b.order)
    console.log(teams)
  return (
    <Wrapper>
        <div>
            {teams.map( (team) => (
                <div className='team' key={team.id}>
                    {
                        team.members.map( (member) => (
                            <div className="card" key={member.id}>
                                <img src={member.photo}  />
                                <div className="container">
                                    <h4><b>{member.name}</b></h4>
                                    <p>{member.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ))}
        </div>
    </Wrapper>
  )
}

