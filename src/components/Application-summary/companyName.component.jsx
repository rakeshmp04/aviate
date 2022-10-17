import {Fragment} from 'react';
import { Outlet, Link , NavLink } from 'react-router-dom';
import '../../components/Application-summary/companyName.style.scss';

const CompanyName = () =>{

    return(
    <Fragment>
        <div className='uppernav'>
            <h1>Job application status</h1>
                <div className='companyName'>
                    <img src={require('../../assets/google.png')}></img>
                    <div className='companyInfo'>
                        <h1>Google</h1>
                        <h2>SDE lll</h2>
                        <h3>Bengaluru, Karnataka</h3>
                    </div>
                </div>
                <hr></hr>
                <div className='navbar-links'>
                    <Link className='nav-link' to='/'>
                        Application
                    </Link>
                    <Link className='nav-link' to='/Job-Description'>
                        Job description
                    </Link>
                    <Link className='nav-link' to='/Company-info'>
                        Company info
                    </Link> 
                </div>
        </div>  
        <Outlet />
    </Fragment>
    )
}

export default CompanyName;