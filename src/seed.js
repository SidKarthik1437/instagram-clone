/* eslint-disable no-plusplus */
// NOTE: replace 'hdZAdGhfHldqK6afaTiKHagIRYd2' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "hdZAdGhfHldqK6afaTiKHagIRYd2",
      username: "sid",
      fullName: "Sid Karthik",
      emailAddress: "kingacilino@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "reyna",
      fullName: "Reyna",
      emailAddress: "reyna@valorant.com",
      following: [],
      followers: ["hdZAdGhfHldqK6afaTiKHagIRYd2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "raze",
      fullName: "Raze",
      emailAddress: "raze@valorant.com",
      following: [],
      followers: ["hdZAdGhfHldqK6afaTiKHagIRYd2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "breach",
      fullName: "Breach",
      emailAddress: "breach@valorant.com",
      following: [],
      followers: ["hdZAdGhfHldqK6afaTiKHagIRYd2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/reyna/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "raze",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "breach",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
