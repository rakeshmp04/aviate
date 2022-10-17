import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/navigation.component';
import ApplicationSummary from './components/Application-summary/application-summary.component';
import RecommendedJobs from './components/RecommendedJobs/recommendedJobs.component';

const App = () => {
  return (
    <div>
        <div className='header'>
                <h1>InstaHire.</h1>
            </div>
  
    <div className="App">
     <Navigation />
     <ApplicationSummary />
     <RecommendedJobs />
    </div>
    </div>
    
  );
}

export default App;
