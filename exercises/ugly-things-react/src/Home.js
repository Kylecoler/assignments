import React from 'react'

const Home = ()=>{
    const style={
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        textAlign:"center"
    }
    return(
        <div style={style}>
            <img src="https://o.aolcdn.com/images/dims?crop=2048%2C1299%2C0%2C0&quality=85&format=jpg&resize=1600%2C1015&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-03%2F12f4d230-3c9c-11e9-beb3-7b7022363f62&client=a1acac3e1b3290917d92&signature=1e4f3e7e2e62b1f8b4524392c37b5a13415f0fd5" alt=""/>
            <p style={{margin:"20pt"}}>Ah the joys of <em>SpaceX</em> the wonders that they have brought to the realm of space travel. </p>
            <img src="https://cdn.vox-cdn.com/thumbor/ZheH1geaomaziNDFpcKDzBY5kh0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/53935213/25787998624_3ca213be1e_o.0.jpg" alt=""/>
        </div>
    )
}

export default Home