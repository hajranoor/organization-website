import React , {useEffect, useState} from 'react'
import './ourTeam.css'

import {useHistory} from 'react-router-dom';

function OurTeam() {
    const [teamData, setTeamData] = useState([]);
    const [status, setStatus] = useState(null)
    console.log("are we even here1?")


    useEffect(() => {
        const fetchData  =async () => {
            try {
                console.log("are we even here?")
                const response = await fetch ('http://localhost:3001/team/getTeam' , {
                    method: 'GET',
                    headers: {
                        'Content-Type' : 'application/json',
                    },
                });
                setStatus(response.status);

                if (response.ok) {
                    const data = await response.json();
                    setTeamData(data);
                    console.log(data)
                    console.log("data has been received")

                }
                else {
                    const errorData = await response.json();
                    console.error(errorData.message);
                }
            }
            catch (error) {
                console.error("error in fetching data" , error)
            }
        };
        fetchData();
    } , []);








    // return (
    //     <div>
    //         <h1>Team Data</h1>
    //         <p>Status Code: {status}</p>
    //         {teamData.length > 0 ? (
    //             <ul>
    //                 {teamData.map((team, index) => (
    //                     <li key={index}>{team.name}</li> // Adjust according to the structure of your team data
    //                 ))}
    //             </ul>
    //         ) : (
    //             <p>No team data available</p>
    //         )}
    //     </div>
    // );

    // return (
    //     <div className="team-members">
    //       {teamData.map(member => (
    //         <div className="card" key={member._id}>
    //           <img src={`http://localhost:3001/${member.image}`} alt={member.name} className="card-img-top" />
    //           <div className="card-body">
    //             <h5 className="card-title">{member.name}</h5>
    //             <p className="card-text">{member.role}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   );


  return (
    <div className="team-section">
      <h2 className="team-title">Our Team</h2>
      <p className="team-description">At Hunar ki Chotiyan, we're a team of dedicated students committed to empowering young minds in mountainous regions. Together, we believe in the power of education to transform lives and reach new heights</p>
      <div className="team-members">
        {teamData.map(member => (
          <div className="card" key={member._id}>
            <img src={`http://localhost:3001/${member.image}`} alt={member.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{member.name}</h5>
              <p className="card-role">{member.role}</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="card-socials">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-google"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default OurTeam;