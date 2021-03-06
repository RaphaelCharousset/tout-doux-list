import {
  ADD__NEW__TASK,
  CLEAR__COMPLETED__TASKS,
  CLEAR__SINGLE__TASK,
  CONNECT,
  SAVING,
  TOGGLE__DARKMODE,
  TOGGLE__DONE__TASK,
  UPDATE__ALL__TASKS__IN__STATE,
  UPDATE__NEWTASK__INPUT,
  UPDATE__TASK__IN__STATE,
  UPDATE__TASK__IN__STATE__WITH__VALUE
} from '../actions';

import deleteTaskFromBdd from '../hooks/deleteTaskFromBdd'

const initialState = {
  darkMode: false,
  tasks: [],
  newTaskInput: '',
  saving: false,
  user: undefined
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        user: action.user,
      }

    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.tasks
      }

    case SAVING:
      return {
        ...state,
        saving: !state.saving
      }

    case TOGGLE__DARKMODE:
      return {
        ...state,
        darkMode: !state.darkMode, 
      }

    case ADD__NEW__TASK:
        return {
          ...state,
          tasks: [
            ...state.tasks,
            {
              id: action.id,
              done: false,
              order: 0,
              title: state.newTaskInput,
              uid: state.user
            }
          ],
          newTaskInput: '',
        }
  
    case UPDATE__NEWTASK__INPUT:
      return {
        ...state,
        newTaskInput: action.value
      }

    case TOGGLE__DONE__TASK:
      const toggleCopy = [...state.tasks]
      toggleCopy.forEach(task => {
        if (task.id == action.id) {
          task.done = !task.done
        }
      })
      return {
        ...state,
        tasks: toggleCopy
      }

    case CLEAR__SINGLE__TASK:
      const copyMinusOne = []
      state.tasks.map( task => {
        if (task.id != action.id) {
          copyMinusOne.push(task)
        }
      })
      return {
        ...state,
        tasks: copyMinusOne
      }

    case CLEAR__COMPLETED__TASKS:
      state.tasks.forEach( (task) => {
        if (task.done) {
          deleteTaskFromBdd(task.id)
        }
      })
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.done)
      }

    case UPDATE__TASK__IN__STATE:
      const copyOrder = state.tasks.map( task => {
        if (task.id === action.changedTaskId) {
          return {...task, order: action.newOrder}
        } else {
          return task
        }
      })
      return {
        ...state, 
        tasks: copyOrder
      }

    case UPDATE__TASK__IN__STATE__WITH__VALUE:
      const copyValue = state.tasks.map( task => {
        if (task.id === action.id) {
          return {...task, title: action.value}
        } else {
          return task
        }
      })
      return {
        ...state, 
        tasks: copyValue
      }

    case UPDATE__ALL__TASKS__IN__STATE:
      return {
        ...state,
        tasks: action.tasks
      }
    default:
      return state;
  }
};

export default reducer;