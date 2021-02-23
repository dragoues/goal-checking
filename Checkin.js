{
    exercise: 5
    veg: 3
    water: 2
    diet: 7
    comment: "test"
    total: 20
    drinkPen: "1"
    foodPen: "2"
}


{
    exercise: 5
    veg: 3
    water: 2
    diet: 7
    comment: "test"
    total: 20
    drinkPen: "1"
    foodPen: "2"
    // additional fields 
    photo: "joephotourl"
    userName: "joe appleton"
    userId: "vDyPgsU41CMrFK29bmN4lULK6JN2",
        time: "Wed Mar 18 2020 10:03:31 GMT+0000 (Greenwich Mean Time)"
}



import { useState, } from "react";

function useCheckins(fStore) {
    const ref = fStore().collection('checkins');
    const createCheckin = checkin => ref.add(checkin);
    const readCheckin = id => ref.read(id);
    const readCheckins = () => ref.get();
}

return { create, read, list }

}
export default useCheckins;




 ...
const {
    createCheckin,
    readCheckins
} = useCheckins(firebase.firestore)
 ...




const Checkin = props => {

    const { user, createCheckin } = props;

    const handleSubmit = async checkin => {

        const ckin = { ...checkin, ...{ photo: user.photoURL, userId: user.uid, userName: user.displayName || user.email, time: new Date() } }
        createCheckin(ckin);
    }

  ....


function Dash(props) {

    const { checkins, readCheckins } = props;

    const [allCheckins, setAllCheckins] = useState([]);

    useEffect(() => {

        const getAllCheckins = async () => {
            const aCheckins = await readCheckins();
            let checkins = [];
            aCheckins.forEach(c => checkins.push(c.data()));
            setAllCheckins(checkins)
        }

        getAllCheckins();

    }, [])



    rules_version = '2';
    service cloud.firestore {
        match / databases / { database } / documents {

            match / { document=**} {
                allow read, write: if request.auth.uid != null;
            }
        }
    }


    rules_version = '2';
    service cloud.firestore {
        match / databases / { database } / documents {
            match / checkins / { checkin } {
                allow read: if request.auth.uid != null;
                allow write: if request.resource.data.userId == request.auth.uid   // users can only check themselves in
    }

        }

        match / challenges / { challenge } {
            allow read: if request.auth.uid != null;
        }


           ...
        match / checkins / { checkin } {
            allow read: if request.auth.uid != null;
            allow write: if request.resource.data.userId == request.auth.uid;;  // users can only create a checkin for themselves 

            match / comments / { comment } {
                allow read, write: if true;
            }
      ...
        }

         ...
        match / checkins / { checkin } {
            allow read: if request.auth.uid != null;
            allow write: if request.resource.data.userId == request.auth.uid;  // users can only create a checkin for themselves 

            match / comments / { comment } {
                allow read: if request.auth.uid != null;
                allow write: if request.resource.data.userId == request.auth.uid;
            }
      ...
        }

        ...
        match / checkins / { document=**} {
            allow read: if request.auth.uid != null;
            allow write: if request.resource.data.userId == request.auth.uid;  // users a can only create a checkin and a comment for themselves 
      ...
        }

