import './Todo.css';
import React, { useReducer } from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props);
     console.log('id: ', props.id);
     console.log('name: ', props.value);
    this.state = {
        value: this.props.value,
        id: this.props.id,
        tasks: this.props.tasks
    }
  }

  //function complete Task
  completeTask = () => {
    console.log('Todo completeTask', this.props.id);
    ``
  }

  //function delete Task
//   deleteTask = (e) => {
//     console.log('delete thanh cong', e)
//     console.log('tasks', tasks);
//   }

  render() {
    return (
        <div className='App'>
            <img
              src='./assets/1398911_correct_mark_success_tick_valid_icon.png'
              alt='Hoàn thành' width='25'
              style={{ cursor: 'grab' }}
              title='Bấm để hoàn thành Task'
              onClick={() => this.props.completeTask(this.state.id)}
            />
            &nbsp;
            <img
              src='./assets/282471_cross_remove_delete_icon.png'
              alt='Hoàn thành' width='25'
              style={{ cursor: 'grab' }}
              title='Bấm để hoàn thành Task'
              onClick={() => this.props.deleteTask(this.state.id)}
            />
            &nbsp;
            <span>{this.state.value}</span>
        </div>
       
    );
  }

}

export default Todo;
