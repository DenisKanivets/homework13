import React from 'react';
import Alert from './components/Alert';

class App extends React.Component {
  state = {
    value: '',
    disabled: true,
    alertList: []
  };

  componentDidMount() {
    this.textInput.focus();
  };

  handleChange = e => {
    this.setState({value: e.target.value});
    if (e.target.value.length > 0) {
      this.setState({disabled: false}) 
    } else {
      this.setState({disabled: true}) 
    }
  };

  addAlert = () => {
    this.textInput.focus();
    const alertListUpdated = this.state.alertList.concat(<Alert alert={this.state.value} key={new Date()}/>);
    this.setState({ value: '', disabled: true, alertList: alertListUpdated })
  };

  render() {
    return (
      <>
        {this.state.alertList}
        <h1>Alerts App</h1>
        <input ref={input => this.textInput = input} onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.addAlert} disabled={this.state.disabled}>ADD ALERT</button>
      </>
    )
  }
}

export default App