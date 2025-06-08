import React from 'react';
import useLiveReload from './hooks/useLiveReload';

export default function App() {
  useLiveReload();

  return (
    <div>
      <h1><%= name %> React App</h1>
      <p>This is built from a basic React template.</p>
      <a href="https://github.com/mcqj/create-react-app">Template Documentation</a>
    </div>
  );
}
