import React from 'react';
import AppView from './AppView';
import { ModeProvider } from 'contexts/LabelModeContext';

const App = () => {
  return (
    <ModeProvider>
      <AppView></AppView>
    </ModeProvider>
  );
};

export default App;
