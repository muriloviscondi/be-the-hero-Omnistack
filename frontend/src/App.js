import React from 'react';

import './global.css'

import Routes from './routes'

function App() {
  return (
    <Routes />
  );
}

export default App;

// sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p
