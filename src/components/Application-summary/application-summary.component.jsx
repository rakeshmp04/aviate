import '../Application-summary/application-summary.style.scss';
import { Routes, Route} from 'react-router-dom';
import CompanyName from './companyName.component';
import Application from './application.component';
import JobDescription from './JobDescription.component';
import CompanyInfo from './CompanyInfo.component';

const ApplicationSummary = () => {
    return(
        <div className='application'>
        <Routes>
            <Route path='/' element={<CompanyName />}>
                <Route path='/' element={<Application />} />
                <Route path='Job-Description' element={<JobDescription />} />
                <Route path='Company-info' element={<CompanyInfo />} />
            </Route>
        </Routes>
        </div> 
    )
}

export default ApplicationSummary;