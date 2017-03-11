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
      <div class="container">
        <div class="columns">
          <div class="column col-4"></div>
          <div class="column col-4">
            <h1>Generate Hash</h1>

            <form onSubmit={this.updateHash.bind(this)} >
              <input id="message" name="message" class="form-input" placeholder="Type thing to hash" type="password" />

              <div class="form-group empty-action">
                <button class="btn btn-primary" type="submit">Generate</button>
              </div>
            </form>

            <h6 class="empty-title hash-container">{ this.state.hash }</h6>
          </div>
          <div class="column col-4"></div>
        </div>
      </div>
    );
  }

}
