var OlaMundo = React.createClass({

  render: function () {
    return (
      <h1>Olá, React!</h1>
    );
  }

});

ReactDOM.render(
  <OlaMundo />,
  document.getElementById('ola-mundo')
);
