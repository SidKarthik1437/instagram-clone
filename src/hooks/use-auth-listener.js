  import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {

        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            // storing the user in local storage if we have a user
            if (authUser) {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                setUser(authUser);
            }
            else {
                // we dont have na authUser, therefore clear local storage
                localStorage.removeItem("authUser");
                setUser(null);
            }
        })

        return () => listener();
    }, [firebase])

    return { user }
}