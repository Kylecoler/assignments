import React from 'react'

const App = ()=>{
    const today = new Date()
    // const year = today.getFullYear()
    // const month = today.getMonth()
    // const monthList=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const startDate = today.getDate()
    //step one make rows
    //step two fill rows with cells
    const rows = []
    const body = ()=>{
        let date = 1
        for(let i = 0;i<6;i++){
            const dates = []
            for(let j=0;j<7;j++){
                dates.push(<td>{date}</td>)
                date++
                console.log(rows)
            }
            rows.push(<tr>{
                dates.map(day=>{
                    return(day)
                })
            }</tr>)

        }
    }

    body()
    return(
        <div>
            {startDate}
            <table>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thur</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(row=>{
                        return row
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App