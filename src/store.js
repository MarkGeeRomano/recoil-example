import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
} from "recoil"
import { emojiList } from "./constants"

const getUser = (id) => `user-${id}`

const userNameState = atomFamily({
  key: 'userNameState',
  default: (id) => getUser(id)
})

const userEmojiState = atomFamily({
  key: 'userEmojiState',
  default: (id) => random(emojiList)
})

export const userState = selectorFamily({
  key: 'userState',
  get: (id) => ({ get }) => {
    return {
      name: get(userNameState(id)),
      emoji: get(userEmojiState(id)),
    }
  },
  set: (id) => ({ set }, { field, value }) => {
    (field === 'name') ? set(userNameState(id), value) : set(userEmojiState(id), value)
  }
})

export const selectedUserState = atom({
  key: 'selectedUserState',
  default: 1,
})

const userListState = atom({
  key: 'userStateList',
  default: [1, 2, 3]
})

export const filterState = atom({
  key: 'filterState',
  default: '',
})

export const filteredUserState = selector({
  key: 'filteredUserState',
  get: ({ get }) => {
    const usersList = get(userListState)
    const filter = get(filterState)

    return usersList.filter(user => get(userNameState(user)).includes(filter))
  }
})

const random = (list) => list[Math.floor(Math.random() * list.length)]