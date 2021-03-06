import React from 'react'

let display = function(e){
    // document.getElementById(e).classList.toggle("show")
    console.log(e)
}

function Nav(){
    return(
        <nav>
            <ol>
                <li class="dropdown" onMouseOver={display('myDropdown-0')} onMouseOut={display('myDropdown-0')}>
                    <a href="" class="dropbtn">Ryotek Corporation</a>
                    <div id="myDropdown-0" class="dropdown-content">
                        <a href="">about</a>
                        <a href="">videos</a>
                        <a href="">discord</a>
                    </div> 
                </li>
                <li class="dropdown" onMouseOver={display('myDropdown-1')} onMouseOut={display('myDropdown-1')}>
                    <a href="" class="dropbtn">Ryotek Restorations</a>
                    <div id="myDropdown-1" class="dropdown-content">
                        <a href="">about</a>
                        <a href="">videos</a>
                        <a href="">discord</a>
                    </div>
                </li>
                <li class="dropdown" onMouseOver={display('myDropdown-2')} onMouseOut={display('myDropdown-2')}>
                    <a href="" class="dropbtn">Fatsquatch Games</a>
                    <div id="myDropdown-2" class="dropdown-content">
                        <a href="">about</a>
                        <a href="">videos</a>
                        <a href="">discord</a>
                    </div>
                </li>
                <li class="dropdown" onMouseOver={display('myDropdown-3')} onMouseOut={display('myDropdown-3')}>
                    <a href="" class="dropbtn">Gregador the Only</a>
                    <div id="myDropdown-3" class="dropdown-content">
                        <a href="">about</a>
                        <a href="">videos</a>
                        <a href="">discord</a>
                    </div>                    
                </li>
            </ol>
     </nav>
    )
}

export default Nav