import React from "react";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {

// componentDidMount() {

// }
//   render() {
//     console.log(this.props)
//     return (

//     )
//   }
// }

// const mapStateToProps = (state) => {
//   console.log();
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
