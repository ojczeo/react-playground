import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
   return(
    <Button> I <Heart/> React </Button>
  );
 }
}

class Button extends React.Component {
  render () {
    return (
      <button>{this.props.children}</button>
    );
  }
}

const Heart = () => <span className="glyphicon glypicon-heart">&#9825;</span>

class Slider extends React.Component {
  render (){
    return (
      <div>
      <input type="range" ref="inp"
      min="0"
      max="255"
      onChange={this.props.update} />
      </div>
    )
  }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text"
//         onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   )
// }

ReactDOM.render(
  <App txt="this is the props vas" />,
  document.getElementById('app')
)

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isrequired
}


// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text"
//         onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   )
// }

// class App extends React.Component {
//   constructor(){
//    super();
//    this.state = { txt: 'this is the state txt'}
//  }
//  update(e){
//   this.setState({})
// }
//   render(){
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//  render(){
//    return React.createElement('h1', null, 'Hello Guys');
//  }
// }

// const App = () => <h1>Hello Eggheads</h1>

// export default App

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: "this is the default txt"
// }
//
// ReactDOM.render(<App txt/>, document.getElementById('app'));
