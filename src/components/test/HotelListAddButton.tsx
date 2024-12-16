import Button from '@shared/Button'

import { HOTEL_NAMES, IMAGES, EVENTS, HOTEL, ROOMS } from '@/mock/data'

function HotelListAddButton() {
  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleButtonClick = () => {
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
    console.log(ROOMS[Math.floor(Math.random() * ROOMS.length)].price)
    console.log(hotels)
  }
  return <Button onClick={handleButtonClick}>호텔 리스트 추가</Button>
}

export default HotelListAddButton
