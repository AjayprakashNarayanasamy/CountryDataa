import React, { useState, useEffect } from "react";
import axios from "axios";
function Reactrescoun() {

   const [restcountry, setrestcountry] = useState([]);

   useEffect(async function value() {
      var response = await axios.get("http://api.countrylayer.com/v2/all?access_key=ae04e8407ed29a4146632ab5dcb32c92");

      setrestcountry(response.data)
      


   },[])

console.log(restcountry)
   





   return (
      <div >
         <h3 className="div1">Country Data</h3>

         {<table className="div2" >
            <thead>
               <tr>
                  <td className="td1"><b>Country</b></td>
                  <td className="td1"><b>Capital</b></td>
                  <td className="td1"><b>Continent</b> </td>
                  <td className="td1"><b>Alpha Code</b></td>

               </tr>

            </thead>

            <tbody>

               {restcountry.map((data) => (
                  <tr key={data.name}>

                     <td>
                        {data.name}

                     </td>
                     <td>
                        {data.capital}

                     </td>
                     <td>
                        {data.region}
                     </td>
                     <td>
                        {data.alpha3Code}
                     </td>



                  </tr>
               )
               )}






            </tbody>

         </table>


         }

      </div>
   )
}
export default Reactrescoun;
