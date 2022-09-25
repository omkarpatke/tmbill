import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <>
    <div className='form-container'>
        <h2>Take A Free Demo</h2>
        <div className='form-img'>
        <form className='form'>
            <input type="text" className='restaurant-name' placeholder='Restaurant Name' />
            <input type="text" className='owner-name' placeholder='Owner Name' />
            <input type="text" className='owner-email' placeholder='Owner Email' />
            <input type="number" placeholder='Owner Mobile' />
            <input type="text" placeholder='Enter City' />
            <input type='text' placeholder='Enter Address'/>

            <input type="submit" className='submit-button' />
        </form>

        <img src="https://tmbill.com/img/tmbill_request_for_demo.png" alt="form-img" />
        </div>
    </div>
    <div className="tmbill-call-container">
      <img src="https://tmbill.com/img/tmbill_request_for_call_back.png" alt="tmbill_request_for_call_back" />
      <div>
        <h2 className='heading'>Get On-TMBill - Request for call!</h2>
      <div className="get-client-number">
        <select className='call-select'>
          <option value="india">INDIA(+91)</option>
        </select>
        <input type="number" placeholder='Enter Mobile' className='call-input'/>
        <button className='submit-button'>Send</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Form