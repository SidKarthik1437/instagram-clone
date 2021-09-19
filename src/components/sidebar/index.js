import useUser from "../../hooks/use-user"
import User from "./user"
import Suggestions from "./suggestions"

function Sidebar() {

    const { user: { docId, fullName, username, userID, following } } = useUser();
    // console.log("following:", docId);

    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userID={userID} following={following} loggedInUserDocId={docId} />
        </div>
    )
}

export default Sidebar
