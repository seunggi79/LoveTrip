import Button from '@shared/Button'

import { HOTEL_NAMES, IMAGES, EVENTS, HOTEL, ROOMS } from '@/mock/data'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { store } from '@/remote/firebase'
import { COLLECTION } from '@/contants'

function HotelListAddButton() {
  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleButtonClick = () => {
    const batch = writeBatch(store)

    const hotels = HOTEL_NAMES.map((hotelName, idx) => {
      return {
        name: hotelName,
        mainImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        images: IMAGES,
        price: random(130000, 200000),
        starRating: random(1, 5),
        ...HOTEL,
        ...(EVENTS[idx] != null && { events: EVENTS[idx] }),
      }
    })

    hotels.forEach((hotel) => {
      const hotelDocRef = doc(collection(store, COLLECTION.HOTEL))
      batch.set(hotelDocRef, hotel)
      ROOMS.forEach((room) => {
        const subDocRef = doc(collection(hotelDocRef, COLLECTION.ROOM))
        batch.set(subDocRef, room)
      })
    })
    batch.commit()
  }
  return <Button onClick={handleButtonClick}>호텔 리스트 추가</Button>
}

export default HotelListAddButton
