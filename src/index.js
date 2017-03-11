// inferno module
import Inferno from 'inferno';

// app components
import App from './components/App';

require("!style!css!spectre.css/dist/spectre.min.css");
require("!style!css!./styles/styles.css");

if (module.hot) {
    require('inferno-devtools');
}

Inferno.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}

