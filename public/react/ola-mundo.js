var olaMundo = React.createClass({

  render: function () {
    return (<h1>Olá, React!</h1>);
  }

});

ReactDOM.render(
  <olaMundo />,
  document.getElementById('ola-mundo')
);
