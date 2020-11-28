import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

let i=0;
let j=0;
function App() {
  const [selectedIndex,setSelectedIndex]=useState(-1);
  const [selectedIndext,setSelectedIndext]=useState(-1);

  const change = ()=> {
    setSelectedIndex(-1);
  }

  
  return <div id="main">
     <ol>
		{
			states.map((item,index)=>(
				<li key={index}>
          <button id={"state"+(index+1)} onClick={()=>{setSelectedIndex(index);setSelectedIndext(-1);i++; if(i%2==0){setSelectedIndex(-1);}}}>{item.name}</button>
          {
						(selectedIndex===index)?
            <>
            <ol>
              
               { item.cities.map((value,number)=>(
                  <li key={number}>
                    <button id={"city"+(number+1)} onClick={()=>{setSelectedIndext(number);j++; if(j%2==0){setSelectedIndext(-1);}}} >{value.name}</button>
                    {
                        (selectedIndext===number)?
                        <>
                        <ol>
                          {
                            value.towns.map((valuet,numbert)=>(
                              <li key={numbert}>
                                <button id={"town"+(numbert+1)} onClick={change}>{valuet.name}</button>
                              </li>
                            ))
                          }
                        </ol>
                        </>
                        : null
                    }
                  </li>
                ))}
               
               </ol>
						</>
            : null
          }
				</li>
			))
		}
		</ol>
  </div>;
}

export default App;
