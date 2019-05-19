class ParentC extends React.Component {
    render() {
        return (
            <div>
            <ChildC />
            <ChildC />
            </div>
        )
    }
}
class ChildC extends React.Component {
    render() {
        return (
            <h1>
                Child Component
            </h1>
        )
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello Child Component</h1>
            <h1>Hello Child Component</h1>
            </div>
        )
    }
}