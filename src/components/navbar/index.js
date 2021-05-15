import React from 'react'

import { Nav, Li, Ul , Side} from './style'

const Navbar = () => {
    return (
        <div>
            <Nav className="text-gray-800">
                <div className="flex align-center justify-between px-10">
                    <div className="brand">DividWork</div>
                    <Ul className="flex">
                        <Li className="ml-10">Home</Li>
                        <Li className="ml-10">Home</Li>
                        <Li className="ml-10">Home</Li>
                    </Ul>
                </div>
            </Nav>
            
            <Side className="">
                    sdasfd
            </Side>
        </div>
    )
}

export default Navbar
