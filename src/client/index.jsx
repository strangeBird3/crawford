import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>), document.getElementById('app'));


