import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data.length > 0);
}

// get user from firestore where uaserID === userID(passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection("users").where("userID", "==", userId).get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));
  return user;
}

export async function getSuggestedProfiles(userID, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();
  return (result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  })).filter((profile) => profile.userID !== userID && !following.includes(profile.userID)));
}


export async function updateFollowing(loggedInUserDocId, profileId, IsFollowing) {
  return firebase.firestore().collection("users").doc(loggedInUserDocId).update({
    following: IsFollowing ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
  })
}

export async function updateFollowers(profileDocId, userID, IsFollowing) {
  return firebase.firestore().collection("users").doc(profileDocId).update({
    followers: IsFollowing ? FieldValue.arrayRemove(userID) : FieldValue.arrayUnion(userID)
  })
}


export async function getPhotos(userID, following) {
  const result = await firebase
  .firestore()
  .collection("photos")
  .where("userID", "in", following)
  .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  })
  );


  const photoswithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if(photo.likes.includes(userID)) {
        userLikedPhoto = true;
      }
      
      const user = await getUserByUserId(photo.userID);
      const { username } = user[0];

      return {username, ...photo, userLikedPhoto};

      
    })
  )
  return photoswithUserDetails;
}
