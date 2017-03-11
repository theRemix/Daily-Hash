import Inferno from 'inferno';
import Component from 'inferno-component';
import { Hash } from '../lib/Hash';

export default class App extends Component{

  constructor(  ) {
    super(  );

    this.setState({ hash : null });
  }

  updateHash(event) {
    event.preventDefault();
    const hash = Hash.generate(event.target.children.namedItem("message").value);
    this.setState({ hash });
  }

  render() {
    return (
      <div>
        <h1>Generate Hash</h1>

        <form onSubmit={this.updateHash.bind(this)} >
          <input id="message" name="message" placeholder="Type thing to hash" type="password" />
          <button type="submit">Generate</button>
        </form>

        <div class="hash-container">
          <h2>{ this.state.hash }</h2>
        </div>
      </div>
    );
  }

}
