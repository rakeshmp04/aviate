import { Outlet} from 'react-router-dom';
import'../Application-summary/companyInfo.style.scss';

const CompanyInfo = () => {
    return(
        <div className='companyInfo'>
           <h3>Google</h3><br></br>
           <p>Computer Software - 10,001+ employees - 307,320 on LinkedIn<br></br><br></br>
            A problem isn't truly solved until it's solved for all. 
            Googlers build products that help create opportunities for everyone, 
            whether down the street or across the globe. Bring your insight, imagination 
            and a healthy disregard for the impossible. Bring everything that makes you unique.
             Together, we can build for everyone.<br></br><br></br>
            Check out our career opportunities at careers.google.com.
            </p>
            <Outlet />
        </div>   
    )
}

export default CompanyInfo;