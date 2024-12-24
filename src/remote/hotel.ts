import { COLLECTION } from '@/contants'
import {
  collection,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

export async function getHotels(pageParams?: QuerySnapshot<unknown>) {
  const hotelsQuery =
    pageParams == null
      ? query(collection(store, COLLECTION.HOTEL), limit(10))
      : query(
          collection(store, COLLECTION.HOTEL),
          startAfter(pageParams),
          limit(10),
        )
  const hotelsSnapshot = await getDocs(hotelsQuery)
  const items = hotelsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  const lastVisible = hotelsSnapshot.docs[hotelsSnapshot.docs.length - 1]

  return {
    items,
    lastVisible,
  }
}
