import React from 'react'
import Navbar from './components/navbar/index'

const App = () => {
    return (
        <React.Fragment>
            {/* <div className="colorBG">
                <div className="w-52 h-52 rounded-full bg-pink absolute inset-12"></div>
                <div className="w-52 h-52 rounded-full bg-orange absolute" style={{top:'200px',left:'500px'}}></div>
                <div className="w-52 h-52 rounded-full bg-yellow absolute" style={{top:'100px',right:'50px'}}></div>
                <div className="w-52 h-52 rounded-full bg-purple absolute" style={{bottom:'50px',left:'300px'}}></div>
            </div>
            <div className="glassWrap"> */}
                <Navbar />
            {/* </div> */}
        </React.Fragment>
    )
}

export default App
