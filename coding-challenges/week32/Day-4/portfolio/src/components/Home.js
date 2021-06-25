import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center m-auto w-50'>
      <Link to='/about' className='btn btn-outline-primary my-5'>
        About
      </Link>

      <div className='container text-center my-5'>
        <div className='row'>
          <div className='col-sm d-flex flex-column justify-content-center'>
            <h2 className='text-warning'>Projects</h2>
          </div>
          <div className='col-sm'>
            <ul className='list-group'>
              <li className='list-group-item'>Cras justo odio</li>
              <li className='list-group-item'>Dapibus ac facilisis in</li>
              <li className='list-group-item'>Morbi leo risus</li>
              <li className='list-group-item'>Porta ac consectetur ac</li>
              <li className='list-group-item'>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container text-center my-5'>
        <div className='row'>
          <div className='col-sm d-flex flex-column justify-content-center'>
            <h2 className='text-warning'>Experience on </h2>
          </div>
          <div className='col-sm'>
            <ul className='list-group'>
              <li className='list-group-item'>Python</li>
              <li className='list-group-item'>HTML</li>
              <li className='list-group-item'>CSS</li>
              <li className='list-group-item'>JavaScript</li>
              <li className='list-group-item'>Node</li>
              <li className='list-group-item'>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
