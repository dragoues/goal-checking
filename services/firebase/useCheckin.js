function useCheckin(fStore) {
  const ref = fStore().collection('checkins');
  const createCheckin  = checkin => ref.add(checkin);

    const readCheckins = () => ref.get();

   const createComment = (checkinID, comment) => ref.doc(checkinID).collection('comments').add(comment); 

  const readComments = (checkinID) => ref.doc(checkinID).collection('comments').get();


  return {createCheckin, readCheckins, createComment, readComments}
}
export default useCheckin;
