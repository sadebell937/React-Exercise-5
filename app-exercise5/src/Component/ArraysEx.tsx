import { prettyDOM } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';

function ArrayEx() {
    const colors = ["red", "orange", "yellow"];
    const [colorsState, setColors] = useState(colors);
    const Pets = [
        {name: "Betty", type: "cat", id: 1},
        {name: "Buddy", type: "dog", id: 2},
        {name: "Brownie", type: "dog", id: 3}
    ]

    function addColor(color: string): void {
        setColors(prevColorArray => [...prevColorArray, color]);

    }

    interface Pet {
        name:string;
        type: string;
        id:number;
    }

    
    return (
      <div>
          <h1>Arrays Exercise</h1>
          <h3>Colors</h3>

          <ol>
              {colors.map((colors, index => <li key = {index}>{colors}</li>)}
          </ol>   

          <button onClick={() => addColor("Green") }>Add Green</button>
          <button onClick={() => addColor("Blue") }>Add Blue</button>
          <button onClick={() => addColor("Violet") }>Add Violet</button>

          <h2>Pets</h2>
          <table>
              <tr>
                  <th>Name</th>
                  <th>Type</th>
              </tr>
          </table>

          {Pets.map((pet) => 
                <tr key = {pet.id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>

                </tr>
            )}        
             
          
        

          


          



          




        </div>

      
    );
  }
  
  export default ArrayEx;
  