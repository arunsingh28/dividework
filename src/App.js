import React from 'react'
import Navbar from './components/navbar/index'

const App = () => {
    return (
        <React.Fragment>
            <div className="colorBG">
                <div className="w-52 h-52 rounded-full bg-pink absolute inset-12"></div>
            </div>
            <div className="glassWrap">
                <Navbar />
            </div>
        </React.Fragment>
    )
}

export default App
