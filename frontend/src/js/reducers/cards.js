
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

function createCardReducer() {
  const joined = (state = [], action) => {
    switch(action.type) {
      case 'CARDS_FETCH_RESTART':
        return [];
      case 'CARDS_FETCH_SUCCESS':
        return action.joined;
      case 'CARDS_JOIN_SUCCESS':
        return [...state, action.card]
      default: {
        return state;
      }
    }
  }

  const available = (state = [], action) => {
    switch(action.type) {
      case 'CARDS_FETCH_RESTART':
        return [];
      case 'CARDS_FETCH_SUCCESS':
        return action.available;
      case 'CARDS_JOIN_SUCCESS':
        return state.filter(card => card.id !== action.card.id)
      default: {
        return state;
      }
    }
  }

  const activeCards = createReducer({}, {
    'CARDS_SET_ACTIVE_CARD': (state, action) => {
      const { card } = action;
      state[card.id] = card;
    },
    'CARDS_UPDATE_USER_STATE': (state, action) => {
      const { user, cardId } = action;
      const joinedUsers = state[cardId].joinedUsers;
      const index = joinedUsers.findIndex(ju => ju.uid === user.uid);

      if (index < 0) { return state; }
      if (joinedUsers[index].state === user.state) { return state; }

      joinedUsers[index].state = user.state;
    }
  })

  const messages = createReducer({}, {
    'CARDS_SET_MESSAGES': (state, action) => {
      const prevMessages = state[action.cardId] || [];
      state[action.cardId] = [...prevMessages, ...action.messages]
    }
  })

  const messagesSubs = (state = {}, action) => {
    switch(action.type) {
      case 'CARDS_REGISTER_MESSAGE_SUB':
        return {...state, [action.cardId]: action.sub}
      default:
        return state;
    }
  }


  return combineReducers({
    joined,
    available,
    activeCards,
    messages,
    messagesSubs
  })
}

export default createCardReducer();
