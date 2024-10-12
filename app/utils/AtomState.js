import { atom } from 'jotai'
const countAtom = atom(501)
export { countAtom }

// import { useAtom } from 'jotai'
// import { countAtom } from '@/app/utils/AtomState'
// const [count, setCount] = useAtom(countAtom)
// console.log('ok count',count )