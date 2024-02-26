import React from 'react';
import useLiveReload from './hooks/useLiveReload';

export default function App() {
  useLiveReload();

  return (
    <div>
      <h1>React Template</h1>
      <p>This is a basic React template.</p>
      <a href="https://reactjs.orghttps://github.com/mcqj/create-create-app">Documentation</a>
    </div>
  );
}
