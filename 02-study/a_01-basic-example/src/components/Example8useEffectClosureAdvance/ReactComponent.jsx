import React from 'react';

export default class ReactComponentLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.countInterval = -1;
    this.state = {
      count: 0,
      name: 'milkmidi',
    };
  }

  componentDidMount() {
    console.log('%cReact.Component componentDidMount', 'background:#3498db;color:white;');
    this.countInterval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('%cReact.Component componentWillUnmount', 'background:#3498db;color:white;');
    clearInterval(this.countInterval);
  }

  render() {
    const { count, name } = this.state;
    return (
      <section data-name="RectComponent" className="style-3">
        <h2>
          hi, react component, {count}, {name}
        </h2>
      </section>
    );
  }
}
