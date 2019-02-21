import React from "react";
import Box from "./Box"

const App = () => {
    const styles = {
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)"
    }

    return(
        <div style={styles}>
           <Box 
            color="red" 
            title="2"
            subtitle="3"
            info="1" /> 
            <Box
            color="blue"
            title="10"
            subtitle="5"
            info="20" />
            <Box 
            color="red" 
            title="2"
            subtitle="3"
            info="1" /> 
            <Box
            color="blue"
            title="10"
            subtitle="5"
            info="20" />
            <Box 
            color="red" 
            title="2"
            subtitle="3"
            info="1" /> 
            <Box
            color="blue"
            title="10"
            subtitle="5"
            info="20" />
            <Box 
            color="red" 
            title="2"
            subtitle="3"
            info="1" /> 
            <Box
            color="blue"
            title="10"
            subtitle="5"
            info="20" />
            <Box 
            color="red" 
            title="2"
            subtitle="3"
            info="1" /> 
            <Box
            color="blue"
            title="10"
            subtitle="5"
            info="20" />
        </div>
        
    )
}

export default App