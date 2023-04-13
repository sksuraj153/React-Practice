import {Outlet,Link} from 'react-router-dom'
import { Fragment } from 'react';

const Navigation = () => {
    return (
      <Fragment>
        <Link className='logo-container' to='/'>
            <div>Logo</div>
        </Link>
        <div className='navigation'>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            Shop
            </Link>
          </div>
          <Outlet/>
        </div>
      </Fragment>
    )
  }

export default Navigation;