import { create } from 'zustand'

const useUserStore = create((set) => ({
    token: '',
    user: {},

}))
