class App extends React.Component {
    names = ["Peter", "Bruce", "Clark"];
    state = { name: "Anonymous" };
  
    componentDidMount() {
      setInterval(() => {
        const name = this.generateName();
        this.setState({ name });
      }, 1000);
    }
  
    generateName = () =>
      this.names[Math.floor(Math.random() * this.names.length)];
  
    render() {
      return <View name="Sam" />;
    }
  }

  const View = ({ name }) => `Hi, I'm ${name}`;