class App extends React.Component {
    render() {
      return <Toolbar theme="dark" />;
    }
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton theme={props.theme} />
      </div>
    );
  }
  
  class ThemedButton extends React.Component {
    render() {
      return <Button theme={this.props.theme} />;
    }
  }