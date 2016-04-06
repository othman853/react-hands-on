var Countdown = React.createClass({

  getInitialState: function () {
    return ({
      time: 10,
      progressBarValue: 100
    });
  },

  decrease: function () {

    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    }

  },

  decreaseProgressBar: function () {
    if (this.state.progressBarValue > 0) {
      this.setState({progressBarValue: this.state.progressBarValue - 1});
    }
  },

  componentDidMount: function () {
    this.interval = setInterval(this.decrease, 1000);
    this.progressBarInterval = setInterval(this.decreaseProgressBar, 100);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
    clearInterval(this.progressBarInterval);
  },

  render: function () {

    return (
      <div>
        <h1> Countdown </h1>
        <span> Você possui {this.state.time} segundo(s) </span>
        <br />
        <progress min="0" max="100" value={this.state.progressBarValue}></progress>
      </div>
    );
  }

});

ReactDOM.render(
  <Countdown />,
  document.getElementById('countdown')
);
