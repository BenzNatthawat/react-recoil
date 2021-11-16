import { atom, selector } from 'recoil'

const userState = atom({
  key: 'user',
  default: { // กำหนดค่าเริ่มต้น
    name: 'Zero',
    age: 20,
    active: true
  }
})

const nameState = selector({
  key: 'charState',
  get: ({ get }) => {
    const user = get(userState)
    return user?.name
  },
  set: ({ set, get }, newUser) => {
    console.log(newUser)
    const user = get(userState)
    set(userState, newUser)
  }
})

export { userState, nameState }