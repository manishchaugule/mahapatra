import React from 'react';
import ApplicationHeader from './component/ApplicationHeader'
import ApplicationBody from './component/ApplicationBody'
import ApplicationFooter from './component/ApplicationFooter'
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <ApplicationHeader />
      <ApplicationBody />
      <ApplicationFooter />
    </React.Fragment>
  );
}

export default App;
