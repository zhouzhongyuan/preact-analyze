import { h, Component } from '../preact/src/preact.js';

import Home from './home';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	render() {
		return (
			<div id="app">
					<Home path="/" />
			</div>
		);
	}
}
