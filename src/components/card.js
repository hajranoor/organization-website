import React from 'react'

const Card = ({ member }) => {
    return (
        <div className = "card">
            <image src = {member.image} alt = {member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
        </div>
    );
};

export default Card;