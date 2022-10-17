import {Outlet} from 'react-router-dom';
import './application.style.scss';

const Application = () => {
  const submit = () => {
    alert('Submitted successfully.')
  }

    return(
        <div className='application1'>
            <div className="timeline">
  <div className='container2'>
    <div className="content">
      <h3>Application submitted.</h3>
      <p>07 : 43 AM, Sunday, 10 - 10 - 2022.</p>
      <p>Completed.</p>
    </div>
  </div>
 
  <div className="container2">
    <div className="content">
      <h3>Application accepted.</h3>
      <p>07 : 21 PM, Monday, 11 - 10 - 2022.</p>
      <p>Completed.</p>
    </div>
  </div>

  <div className="container2">
    <div className="content">
      <h3>Online assessment.</h3>
      <p>06 : 30 PM, Thursday, 14 - 10 - 2022.</p>
      <p>Completed.</p>
    </div>
  </div>

  <div className="container">
    <div className="content">
      <h3>Technical interview.</h3>
      <p>02 : 30 PM, Monday, 17 - 10 - 2022.</p>
      <p>Pending.</p>
    </div>
  </div>

  <div className="container">
    <div className="content">
      <h3>HR interview.</h3>
      <p>Pending.</p>
    </div>
  </div>

  <div className="container">
    <div className="content">
      <h3>Hired!</h3>
      <p>Pending.</p>
    </div>
  </div>
  <hr></hr>
</div>
<br></br>
<h2>For any queries.</h2>
<form className='form' onSubmit={submit}>
  <input type='textarea' required placeholder='Write a message'></input>
  <button type='submit' className='btn'>Submit</button>
</form>
<br></br><br></br> <br></br><br></br>
<Outlet />
</div>
  );
}

export default Application;