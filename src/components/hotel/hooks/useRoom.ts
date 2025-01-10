import { useQuery } from 'react-query'
import { getRooms } from '@/remote/room'

function useRoom({ hotelid }: { hotelid: string }) {
  return useQuery(['rooms', hotelid], () => getRooms(hotelid))
}

export default useRoom
