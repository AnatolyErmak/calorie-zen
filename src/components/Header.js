import headerLogo from '../images/calorieZen.png';
import React from 'react';

 function Header() {
   return (
     <div>
       <img src={headerLogo} />
       <h1>Calorie-Zen</h1>
     </div>
   );
 }
   
 export default Header;