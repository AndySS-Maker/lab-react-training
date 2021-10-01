import React from 'react';

function IdCard(props){
  return (
    <section style={{border: "2px solid black", padding: "10px", marginBottom: "10px", display: 'flex', width: '500px'}}>
         <img src={props.picture} alt="profile-pic" />
         <div style={{lineHeight: '6px', marginLeft: '15px'}}>
         <p><b>First Name:</b> {props.firstName}</p>
         <p><b>Last Name:</b> {props.lastName}</p>
         <p><b>Gender:</b> {props.gender}</p>
         <p><b>Heigth:</b> {props.heigth}</p>
         <p><b>Birth:</b> {props.birthday}</p>
         </div>
    </section>
  );
}

export default IdCard;