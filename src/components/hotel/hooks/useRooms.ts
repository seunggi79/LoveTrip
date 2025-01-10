import { useQuery, useQueryClient } from 'react-query'
import { getRooms } from '@/remote/room'
import { useEffect } from 'react'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { store } from '@/remote/firebase'
import { COLLECTION } from '@/contants'
import { Room } from '@/models/room'

function useRooms({ hotelId }: { hotelId: string }) {
  const client = useQueryClient()
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(doc(store, COLLECTION.HOTEL, hotelId), COLLECTION.ROOM),
      (snapshot) => {
        const newRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Room),
        }))
        client.setQueryData(['rooms', hotelId], newRooms)
      },
    )

    return () => {
      unsubscribe()
    }
  }, [hotelId, client])
  return useQuery(['rooms', hotelId], () => getRooms(hotelId))
}

export default useRooms
