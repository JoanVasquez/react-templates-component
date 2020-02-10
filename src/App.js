import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import Datatable from './Components/Datatable/Datatable';

import { BrowserRouter as Router } from 'react-router-dom';
import dummyData from './Components/Datatable/dummyData';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Navbar />
      </Router>
      <Form />
      <Datatable
        columns={['Id', 'Name', 'Email', 'Date', 'Actions']}
        data={dummyData}
      />
    </div>
  );
}

export default App;
