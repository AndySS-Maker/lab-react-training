import React from "react";

import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div>   
        <IdCard
            firstName='John'
            lastName= 'Doe'
            gender='male'
            birthday="1992-07-14"
            heigth= '1.78m'
            picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          firstName='Obrien'
          lastName= 'Delores'
          gender='female'
          heigth= '1.72m'
          birthday="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"          
        />
        
        <div style={{marginBottom: '8px'}}>
        < Greetings lang='de'>Ludwig</Greetings>
        </div>
          
        <div>
          < Greetings lang='fr'>François</Greetings>
        </div>

    </div>
  );
}

export default App;
