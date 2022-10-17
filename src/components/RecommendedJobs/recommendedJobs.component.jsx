import { useState } from 'react';
import '../RecommendedJobs/recommendedJobs.style.scss';
import img1 from '../../assets/amazon.png';
import img2 from '../../assets/flipkart.png';
import img3 from '../../assets/google.png';
import img4 from '../../assets/infosys.png';
import img5 from '../../assets/intuit.png';
import img6 from '../../assets/microsoft.png';
import img7 from '../../assets/phonepe.png';
import img8 from '../../assets/walmart.png';

const RecommendedJobs = () => {
  const recomendedJobs = [
    {id:0, image: img1 ,name:'Amazon', role:'Frontend engineer', experience:'6 - 8 years', location:'Bengaluru, Karnataka.'},
    {image: img2 ,name:'Flipkart', role:'UI engineer ll', experience:'3 - 4 years', location:'Bengaluru, Karnataka.'},
    {image: img3 ,name:'Google', role:'Software engineer, Google Ads', experience:'Intermediate', location:'Bengaluru, Karnataka.'},
    {image: img4 ,name:'Infosys', role:'ReactJS developer', experience:'2 -3 years', location:'Bengaluru, Karnataka.'},
    {image: img5 ,name:'Intuit', role:'Software engineer 2, Frontend', experience:'8+ years', location:'Bengaluru, Karnataka.'},
    {image: img6 ,name:'Microsoft', role:'Software engineer', experience:'6 - 8 years', location:'Bengaluru, Karnataka.'},
    {image: img7 ,name:'Phonepe', role:'Software engineer(React Native)', experience:'7+ years', location:'Bengaluru, Karnataka.'},
    {image: img8 ,name:'Walmart', role:'Frontend engineer', experience:'10+ years', location:'Bengaluru, Karnataka.'},
  ];
  const [isApplied, setIsApplied] = useState(false);

  const apply = () => {
    alert('Application submitted succesfully');
    setIsApplied(!isApplied); 
  };
    return (
      <div className='jobs-container'>
        <h2>recommended jobs.</h2>
          {
           recomendedJobs.map((event, index) => {
            return(<div class="card">
            <img src={event.image} />
              <div class="container1">
                <div className='companyInfo1'>
                <h3 key={index}>{event.name}</h3>
                 <p>{event.role}</p>
                 <p>{event.experience}</p>
                 <p>{event.location}</p>
                 <button className='btn'
                  onClick={apply}>{isApplied ? 'Apply' : 'Apply'}</button>
                </div>
              </div>
              </div>
              );
          })
        }
      </div>
    )
}

export default RecommendedJobs;