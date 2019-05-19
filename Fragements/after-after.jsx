class ParentC extends React.Component {
    render() {
        return (
            <>
                <ChildC />
                <ChildC />
            </>
        )
    }
}

/*--------------------------------------------*/

class ParentC extends React.Component {
    render() {
        return (
            <>
                <ChildComponent />
                <ChildComponent />
            </>
        )
    }
}
class ChildComponent extends React.Component {
    render() {
        return (
            <>
                <h1>Hello Child Component</h1>
                <h1>Hello Child Component</h1>
            </>
        )
    }
}