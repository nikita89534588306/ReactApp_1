import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import { Provider } from 'react-redux';
import TestComp from './components/testComp';
import WebPage from './components/WebPage';

const a = ()=>{console.log(store.getState())}

window.store= store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={store}>
        <WebPage/>
    </Provider>
 </React.StrictMode>
);

