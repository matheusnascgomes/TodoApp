import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if(e.key === 'Escape'){
      props.clearSearch()
    }
  }
  
  return (
    <div role='form' className='todoForm'>

      <Grid cols='12 9 10'>
        <input id='description' className='form-control'
        value={props.description}
        onChange={props.handleChange}
        onKeyUp={keyHandler}
        placeholder='Adicione uma tarefa'/>
      </Grid>

      <Grid cols='12 3 2'>
        <IconButton style='primary' icon='plus'
          onClick={props.handleAdd}
        />
        <IconButton style='info' icon='search'
          onClick={props.handleSearch}
        />
        <IconButton style='danger' icon='times'
          onClick={props.clearSearch}
        />
      </Grid>

    </div>
  )
}
