import React from 'react';

export default class ReactComponentLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('%cReact.Component componentDidMount', 'background:#3498db;color:white;');
  }

  componentDidUpdate() {
    console.log(
      `%cReact.Component componentDidUpdate count:${this.state.count}`,
      'background:#3498db;color:white;',
    );
  }

  componentWillUnmount() {
    console.log(
      '%cReact.Component componentWillUnmount',
      'background:#3498db;color:white;',
    );
  }

  render() {
    const { count } = this.state;
    return (
      <section data-name="RectComponent" className="style-3">
        <h2>hi, react component, {count}</h2>
        <button
          className="my-btn"
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          setCount
        </button>
      </section>
    );
  }
}
