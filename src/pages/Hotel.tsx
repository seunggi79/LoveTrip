import useHotel from '@/components/hotel/hooks/useHotel'
import { useParams } from 'react-router-dom'

function HotelPage() {
  const id = useParams() as { id: string }
  const { isLoading, data } = useHotel(id)
  console.log('isLoading', isLoading)
  console.log('data', data)
  return <div>HotelPage</div>
}

export default HotelPage
