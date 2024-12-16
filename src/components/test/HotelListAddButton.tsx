import Button from '@shared/Button'

function HotelListAddButton() {
  return (
    <Button
      onClick={() => {
        console.log('!')
      }}
    >
      호텔 리스트 추가
    </Button>
  )
}

export default HotelListAddButton
