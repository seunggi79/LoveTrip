import { getHotels } from '@/remote/hotel'
import { useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'

function useHotels() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['hotels'],
    ({ pageParam }) => getHotels(pageParam),
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
    },
  )

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      // 더이상 데이터가 없으면 페칭중이면 리턴
      return
    }
    fetchNextPage() // 더 많은 데이터를 가져오기 위한
  }, [fetchNextPage, hasNextPage, isFetching])

  const hotels = data?.pages.map(({ items }) => items).flat()

  return {
    data: hotels,
    loadMore,
    isFetching,
    hasNextPage,
  }
}

export default useHotels
