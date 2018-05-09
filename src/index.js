import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import DatePicker1 from './components/DatePicker1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DatePicker1 />, document.getElementById('root'));
registerServiceWorker();
