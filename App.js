import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
    }
    this.update = this.update.bind(this)
 }
 update(e){
   this.setState({txt: e.target.value})
 }
  render(){
   return(
    <div>
    <input type="text"
     onChange={this.update.bind(this)} />
    <h1>{this.state.txt}</h1>
    </div>
  );
 }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}

ReactDOM.render(
  <App txt="this is the props vas" />,
  document.getElementById('app')
)

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isrequired
}

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
