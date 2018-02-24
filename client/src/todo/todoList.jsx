import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  const renderList = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''} >{todo.description}</td>
        <td className="btn">
          <IconButton  style='success' icon='check' onClick={() => props.handleDone(todo)} hide={todo.done}></IconButton>
          <IconButton style='warning' icon='undo' onClick={() => props.handleUndo(todo)} hide={!todo.done}></IconButton>
          <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)}></IconButton>
        </td>
      </tr>
    ))
  }

  return(
    <table className="table">
      <thead className="taskList">
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
          {renderList()}
      </tbody>
    </table>
  )
}
