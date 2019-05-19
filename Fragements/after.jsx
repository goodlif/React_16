class ParentC extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ChildC />
                <ChildC />
            </React.Fragment>
        )
    }
}

/*--------------------------------------------*/

class ParentC extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ChildComponent />
                <ChildComponent />
            </React.Fragment>
        )
    }
}
class ChildComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello Child Component</h1>
                <h1>Hello Child Component</h1>
            </React.Fragment>
        )
    }
}