import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';

export default () => {
  return (
    <div className='row'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='content-wrapper col-md-12'>
        <div className='container-fluid'>
      
          <Clients />
        </div>
      </div>
     
    </div>
  );
};
