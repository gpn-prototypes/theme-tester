import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import { ThemeContext } from './context/ThemeContext';
import block from 'bem-cn';

import '@gpn-design/uikit/dist/style.css'
import './App.css';

const b = block('App');
const t = block('theme');

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={
      b({}).mix(
        t({
          color: `gpn-${theme}`,
          size: 'gpn-default ',
          control: 'gpn-default',
          breakpoint: 'defult',
          font: 'gpn-default',
          gap: 'medium',
          space: 'gpn-default',
        })
      )
    }>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
