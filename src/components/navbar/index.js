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

                <Side className="absolute top-0 left-0">
                    sdasfd
                </Side>

            </Nav>
        </div>
    )
}

export default Navbar
