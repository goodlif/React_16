import { createContext } from 'react';
const {Provider, Consumer } = React.createContext();

class ProviderComponent extends Component {
    state = {
        title : 'They Francios Wessels',
    }
render() {
        return ( 
        <Provider value={this.state}>
          <Website />
        </Provider>
        )
    }
}

const Website = () => (
    <div>
      <Header />
      <Footer />
    </div>
  )

  const Header = () => (
    <div>
       <Consumer>
          {(context) => context.title}
        </Consumer>
    </div>
  )