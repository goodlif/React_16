ReactDOM.createPortal(child, container)

/* -------- */
class App extends React.Component {
render() {
    // React mounts a new div and renders the children into it
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


  // It can be useful to insert a child into a different loication in the DOM
  class App extends React.Component {
  render() {
    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.
    return ReactDOM.createPortal(
      this.props.children,
      domNode
    );
  }
}

