import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center m-auto w-50'>
      <Link to='/' className='btn btn-outline-primary my-5'>
        Home
      </Link>

      <h1 className='my-5 text-warning'>Yuvraj Singh Yaduwansi</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rem, nam
        harum perferendis expedita tempore corrupti quasi ipsum, unde delectus
        adipisci exercitationem numquam aliquid culpa odit eos odio nemo iste?
      </p>

      <div className='container text-center my-5'>
        <div className='row'>
          <div className='col-sm d-flex flex-column justify-content-center'>
            <h2 className='text-warning'>Hobbies</h2>
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
    </div>
  );
}

export default About;
