import React from 'react';

const Sign = () => {

  return (
    <>
    <div className="container-fluid" id='sign'>
    <div className="row">
      <div id='ii' className="col-md-6 col-xm-12">
         <h1>
          LIVE WEBSITE TRACKER...
         </h1>
      </div>
      <div id='ji' className="col-md-6 col-xm-12">
        
        <h4>Sign in |  <a href='url'> create an account</a></h4> 
        <br />

      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        
        <br />
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>


        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
      </div>

    </div>
    </div>
    </>
  )
}

export default Sign;
