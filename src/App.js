oveimport React, { Component } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import uuid from "react-uuid";

import "./App.css";

class App extends Component {


  state = {
    list: [ ],
    item: "",
    updateItem: false,
  };

  handlerChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handlerClick = () => {
    if(this.state.item.trim() === '')
      return;

    const newItem = [...this.state.list, { text: this.state.item.trim(), id: uuid() }];
    this.setState({ list: newItem, item: "" });
  };

  handlerDelete = id => {
    const updatedList = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  };

  handlerEdit = id =>{
     this.currentIndex= this.state.list.findIndex( item => item.id === id);
     this.setState({item : this.state.list[this.currentIndex].text , updateItem : true})
  }

  handlerEditSave = () =>{
      
       const editedList = [...this.state.list];
       editedList[this.currentIndex].text = this.state.item;
       this.setState({list : editedList,updateItem:false , item :''})
  }

  render() {
    return (
      <div>
        <h1 className="app-title"> Todo List</h1>
        <TodoInput
          change={this.handlerChange}
          click={this.handlerClick}
          edit ={this.handlerEditSave}
          value={this.state.item}
          isUpdate = {this.state.updateItem}
        />
        <TodoList items={this.state.list} handlerDelete={this.handlerDelete} handlerEdit={this.handlerEdit} />
        <footer> © { new Date().getFullYear() } Md.Usman Ansari All Rights Reserved</footer>
      </div>
    );
  }
}

export default App;
