import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>Nadira E- commerce Website</div>
        <ul className='nav-link'>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products details</Link>
            </li>
            <Link to="/checkout">Checkout</Link>

        </ul>

    </nav>
   
  )
}

export default NavBar