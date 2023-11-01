import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Please leave feedback</h2>
        </div>
      </section>
    );
  }
}

// export const App = () => {
//   return <section className="section"></section>;
// };
