// // use the firestore database to get our cards
// import db from '../db/firestore'

const extractSnapshot = snapshot =>
  snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

export const fetchCards = () => {
  return []
  // return db
  //   .collection('cards')
  //   .get()
  //   .then(extractSnapshot)
}