import React from 'react'

import { Nav,Li,Ul } from './style'

const Navbar = () => {
    return (
        <div>
          <Nav className="text-gray-800">
              <Ul className="flex">
                  <Li>Home</Li>
                  <Li>Home</Li>
                  <Li>Home</Li>
              </Ul>
          </Nav>
        </div>
    )
}

export default Navbar
