import React, { Component } from 'react'

// Imports by dev
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  render(){
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}
