import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

// sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p