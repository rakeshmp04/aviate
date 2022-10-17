import {Outlet} from 'react-router-dom';
import '../Application-summary/jobDescription.style.scss';

const JobDescription = () => {
    return(
        <div className='jobDescription'>
            <h3>Minimum qualifications:</h3><br></br>
            <ul>
                <li>Bachelor’s degree or equivalent practical experience.</li>
                <li>2 years of experience with full stack development, across back-end such as Java, Python, 
                    GO, and/or C++ codebases, and front-end experience including 
                    JavaScript and/or TypeScript, HTML, CSS, etc.</li>
                <li>Experience developing accessible technologies.</li>
            </ul>
            <br></br>
            <h3>Preferred qualifications:</h3><br></br>
            <ul>
                <li>Master's degree or PhD in Computer Science or related technical field.</li>
                <li>2 years of experience with software development in one or more 
                    programming languages, or 1 year of experience with an advanced degree.</li>
                <li>2 years of experience with data structures or algorithms in either an academic or industry setting.</li>
                
            </ul>
            <br></br>
            <h3>About the job:</h3><br></br>
           <p>Google's software engineers develop the next-generation 
            technologies that change how billions of users connect, explore,
             and interact with information and one another. Our products need to handle 
             information at massive scale, and extend well beyond web search. We're looking
            for engineers who bring fresh ideas from all areas, including information retrieval,
            distributed computing, large-scale system design, networking and data storage, 
            security, artificial intelligence, natural language processing, UI design and mobile;
            the list goes on and is growing every day. As a software engineer, you will work
            on a specific project critical to Google’s needs with opportunities to switch
            teams and projects as you and our fast-paced business grow and evolve.
            We need our engineers to be versatile, display leadership qualities and be enthusiastic to take
            on new problems across the full-stack as we continue to push technology forward.
            With your technical expertise you will manage project priorities, deadlines, and deliverables.
            You will design, develop, test, deploy, maintain, and enhance software solutions.
<br></br><br></br>

Google Cloud accelerates organizations’ ability to digitally transform their business
 with the best infrastructure, platform, industry solutions and expertise. We deliver
  enterprise-grade solutions that leverage Google’s cutting-edge technology – all on 
  the cleanest cloud in the industry. Customers in more than 200 countries and territories 
  turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems.</p>
  <br></br>

  <h3>Responsibilities:</h3><br></br>
            <ul>
                <li>Write product or system development code.</li>
                <li>Participate in, or lead design reviews with peers
                     and stakeholders to decide amongst available technologies.</li>
                <li>Review code developed by other developers and provide 
                    feedback to ensure best practices (e.g., style guidelines,
                     checking code in, accuracy, testability, and efficiency).</li>
                     <li>Contribute to existing documentation or educational content
                         and adapt content based on product/program updates and user feedback.</li>
                    <li>Triage product or system issues and debug/track/resolve by analyzing
                         the sources of issues and the impact on hardware, network, or
                          service operations and quality.</li>
            </ul>
        
            <Outlet />
        </div>
    )
}

export default JobDescription;