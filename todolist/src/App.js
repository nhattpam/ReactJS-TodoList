import './App.css';
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
    if(this.state.taskName === '')
      return;
    //day du lieu vo array
    this.state.tasks.push(this.state.taskName);
    this.setState({ taskName: '' })
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
          <ul>
            {this.state.tasks.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
        </header>
      </div>
    );
  }

}

export default App;
