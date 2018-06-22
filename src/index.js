import ReactDOM from 'react-dom';
import 'jquery/src/jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
import routes from './routes'

ReactDOM.render(routes, document.getElementById('index'));