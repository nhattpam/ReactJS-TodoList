import './App.css';
import Todo from './Todo'
import React, { useReducer } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: '', tasks: [] };
  }

  //thay doi khi input
  myTaskChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({ taskName: event.target.value });
  }

  //function add Task
  addTask = () => {
    console.log("addTask ", this.state.taskName)
    //chua nhap du lieu thi khong duoc add
    if(this.state.taskName === ''){
      return;
    }
      
    //day du lieu vo array
    const id = this.state.tasks.length;
    const name = this.state.taskName;
    this.state.tasks.push({id, name, done: false});
    this.setState({ taskName: '' })
  }

  //function delete Task
  deleteTask = (id) => {
    console.log('delete thanh cong', id)
    const tasks = this.state.tasks.filter(task => task.id !== id );
    this.setState({ tasks })
  }

    //function complete Task
    completeTask = (id) => {
      console.log('Task muốn hoàn thành', id)
      const tasks = this.state.tasks;
      tasks.forEach(task => {
        if(task.id === id){
          task.done = true;
        }
      })
      console.log('task muốn complete', tasks)
      this.setState ({tasks})
    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          Todo List
          <br />
          <div className="aligned">
            <img
              src='./assets/29240_add_plus_new_icon.png'
              alt='Add Task' width='25'
              style={{ cursor: 'grab' }}
              title='Bấm để thêm Task'
              onClick={() => this.addTask()}
            />
            <input type='text' onChange={this.myTaskChangeHandler} value={this.state.taskName} />

          </div>
          <ul style={{paddingLeft: '10px'}}>
            {this.state.tasks.map((value, index) => {
              // return <li key={index}>{value}</li>
              return <Todo
                ref='todo'
               key={index} id={index} value={value.name} deleteTask={this.deleteTask}
                completeTask ={this.completeTask}
              />
            })}
          </ul>
        </header>
      </div>
    );
  }

}

export default App;
