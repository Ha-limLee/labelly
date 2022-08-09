import React from 'react';
import AppView from './AppView';
import { ModeProvider } from 'contexts/LabelModeContext';
import { LabelListProvider } from 'contexts/LabelListContext';
import { SelectedIdProvider } from 'contexts/SelectedIdContext';

const App = () => {
  return (
    <ModeProvider>
      <LabelListProvider>
        <SelectedIdProvider>
          <AppView></AppView>
        </SelectedIdProvider>
      </LabelListProvider>
    </ModeProvider>
  );
};

export default App;
