var HelloTimer = React.createClass({

  getInitialState: function () {
    return { totalTime: 0 };
  },

  timer: function () {
    this.setState({ totalTime: this.state.totalTime + 1 });
  },

  componentDidMount: function () {
    this.interval = setInterval(this.timer, 1000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function () {
    return (
      <div>
        <h1> Timer </h1>
        <span> Você está há {this.state.totalTime} segundo(s) aqui</span>
      </div>
    );
  }

});

ReactDOM.render(
  <HelloTimer />,
  document.getElementById('hello-timer')
);
