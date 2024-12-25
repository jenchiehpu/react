import { Component } from 'react';

type MyComponentProps = {
  name: string,
};

type State = {
  count: number,
};

export default class MyComponent extends Component<MyComponentProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <section data-name="MyComponent" className="style-4">
        <h1>MyComponent</h1>
        <h2>name:{this.props.name}</h2>
        <h2>count:{this.state.count}</h2>
      </section>
    );
  }
}
