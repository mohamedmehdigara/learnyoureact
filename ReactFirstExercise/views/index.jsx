 import React from 'react';

    export default class TodoBox extends React.Component {
      // Omitted
    }

    class TodoList extends React.Component {
      // Omitted
    }

    class Todo extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <tr>
                    <td style={{border: "1px solid black"}}>
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
                    </td>
                    <td style={{border: "1px solid black"}}>{this.props.title}</td>      
                    <td style={{border: "1px solid black"}}>{this.props.children}</td>   
                </tr>
            );
        }
    }
    Todo.propTypes = {
        title: React.PropTypes.string.isRequired
    };

    class TodoForm extends React.Component {
      // Omitted
    }