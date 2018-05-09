import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import DatePicker1 from './components/DatePicker1';
import DatePicker2 from './components/DatePicker2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DatePicker2 />, document.getElementById('root'));
registerServiceWorker();
