import React from 'react';
import Routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
