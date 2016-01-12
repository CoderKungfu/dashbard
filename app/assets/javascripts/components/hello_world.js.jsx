var HelloWorld = React.createClass({
  getInitialState: function() {
    return {name: 'Neons!'};
  },
  updateName: function(e) {
    this.setState({name: e.target.value});
  },
  render: function() {
    return(
      <div class="greeter">
        <Salutation name={this.state.name} />
        <label for="name">Name:</label>
        <input id="name" type="text" onChange={this.updateName} value={this.state.name} />
      </div>
    );
  }
});
