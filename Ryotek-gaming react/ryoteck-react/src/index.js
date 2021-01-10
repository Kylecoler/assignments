import React from "react"
import ReactDOM from "react-dom"

function Nav(){
    return(
        <nav>
            <ul>
                <li>Ryoteck Corporation</li>
                <li>Ryoteck Restorations</li>
                <li>Fatsquacth Gaming</li>
                <li>Gregador the Only</li>
            </ul>
        </nav>
    )
}

ReactDOM.render(<Nav />,document.getElementById('root'))
