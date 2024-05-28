import { cache } from 'react'
import { History } from './history'
import { getChats } from '@/lib/actions/chat'

const loadChats = cache(async (userId?: string) => {
  return await getChats(userId)
})

export async function Sidebar() {
<<<<<<< HEAD
  const chats = await loadChats('anonymous')
=======
  // const chats = await loadChats('anonymous')
  const chats: any[] = []
>>>>>>> 035751dce690f33e49e9a94834a5c47a90a9f75c
  return (
    <div className="h-screen p-2 fixed top-0 right-0 flex-col justify-center pb-24 hidden sm:flex">
      <History location="sidebar" chats={chats} />
    </div>
  )
}
