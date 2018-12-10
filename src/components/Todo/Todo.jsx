import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todo.styl'
import ColorPicker from "../ColorPicker";

export default class Todo extends React.Component {
  handleDoneClick = () => {
    this.props.onChange({
      isDone: !this.props.todo.isDone,
    })
  }

    handleColorChange = e => {
        this.props.onChange({
            color: e.target.value
        })
    }

  render() {
    const { todo, onDelete } = this.props
    return (
      <div className={`${styles.wrapper} br-md m-b shadow-md p-a `}>
        <div style={{backgroundColor: todo.color}}>
          <h4 className="text-accent">{todo.text}</h4>
          {new Date(todo.ts).toUTCString()}
        </div>
        <div>
          <a href="#" onClick={onDelete}>
            <h1>X</h1>
          </a>

          <a href="#" onClick={this.handleDoneClick}>
            {todo.isDone ? 'Undone' : 'Mark as done'}
          </a>
          <ColorPicker color={todo.color} onChangeColor={this.handleColorChange}/>
        </div>
      </div>
    )
  }
}

Todo.propsTypes = {
  todo: PropTypes.object.isRequired,
}
