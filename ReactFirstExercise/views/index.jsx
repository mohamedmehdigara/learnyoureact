import React from 'react';

    export default class TodoBox extends React.Component{
      render() {
        return (<div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
        );
    }
  }
  class TodoList extends React.Component {
    // Write code here
    render(){
      return( <div className="todoList">
      <table style={{border: "2px solid black"}}>    
                        <tbody>
                        <tr>
            <td style={this.props.title}>Shopping</td>      
            <td style={this.props.children}>Milk</td>
          </tr>
          <tr>
            <td style={this.props.title}>Hair cut</td>            <td style={this.props.children}>13:00</td>
            <td style={this.props.children}>13:00</td>
          </tr>
                        </tbody>
                    </table>
    </div>);
    }
  }

  class TodoForm extends React.Component {
    // Write code here
    render(){
      return(<div className="todoForm">
      I am a TodoForm.
    </div>);
    }
  }
  class Todo extends React.Component {
    // Write code here
    render(){
      return(< div Classname="todo">
I am a Todo
      </div>);
    }
  }