import React from 'react'

function Nav(){
    return(
        <nav>
            <ol>
                <li>Ryotek Corporation</li>
                <li>Ryotek Restorations</li>
                <li>Fatsquacth Gaming</li>
                <li>Gregador the Only</li>
            </ol>
         <div class="dropdown" onmouseover="display('myDropdown-0')" onmouseout="display('myDropdown-0')">
             <a href="home.html" class="dropbtn">Ryotek Corporation</a>
             <div id="myDropdown-0" class="dropdown-content">
                 <a href="">about</a>
                 <a href="">videos</a>
                 <a href="">discord</a>
             </div>
         </div>
         <div class="dropdown" onmouseover="display('myDropdown-1')" onmouseout="display('myDropdown-1')">
             <a href=".ryotek_restorations.js" class="dropbtn">Ryotek Restorations</a>
             <div id="myDropdown-1" class="dropdown-content">
                 <a href="">about</a>
                 <a href="">videos</a>
                 <a href="">discord</a>
             </div>
         </div>
         <div class="dropdown" onmouseover="display('myDropdown-2')" onmouseout="display('myDropdown-2')">
             <a href="Fatsquatch Games.html" class="dropbtn">Fatsquatch Games</a>
             <div id="myDropdown-2" class="dropdown-content">
                 <a href="">about</a>
                 <a href="">videos</a>
                 <a href="">discord</a>
             </div>
         </div>
         <div class="dropdown" onmouseover="display('myDropdown-3')" onmouseout="display('myDropdown-3')">
             <a href="Gregador the Only.html" class="dropbtn">Gregador the Only</a>
             <div id="myDropdown-3" class="dropdown-content">
                 <a href="">about</a>
                 <a href="">videos</a>
                 <a href="">discord</a>
             </div>
         </div>
     </nav>
    )
}

export default Nav