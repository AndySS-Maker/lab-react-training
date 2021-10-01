import React from "react";

function Greetings(props){
    let word = '';

    switch (props.lang){
        case 'de':
        word = 'Hallo';
        break;
        case 'fr':
        word = 'Bonjour';
        break;
        case 'es':
        word = 'Hola';
        break;
        case 'en':
        word = 'Hello';
        break;
        default:
        word = 'Olá';    
    }

    return (
        <div style={{border: "2px solid black",  width: '520px', fontSize: '30px', maxHeight: '50px'}}>
            <p style={{marginTop: '8px', marginLeft: '8px'}}>
                {word} {props.children}
            </p>
        </div>
    )
}

export default Greetings;