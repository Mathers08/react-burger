import {StrictMode} from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
