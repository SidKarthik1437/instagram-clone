import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom"
import { updateFollowers, updateFollowing } from "../../services/firebase"

export default function SuggestedProfile({
    profileDocId,
    username,
    profileId,
    userID,
    loggedInUserDocId
}) {

    const [followed, setFollowed] = useState(false)

    async function handleFollowUser() {
        setFollowed(true);
        await updateFollowing(loggedInUserDocId, profileId, false);
        await updateFollowers(profileDocId, userID, false);

    }
    // console.log(profileId)   

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 h-8 flex mr-3"
                    src={`/images/avatars/${username}.jpg`}
                    alt=""
                />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username + profileId}</p>
                </Link>
            </div>
            <button
                type="button"
                className="text-xs font-bold text-blue-medium"
                onClick={handleFollowUser}
            >
                {followed ? "Unfollow" : "Follow"}
                </button>
        </div>
    ) : null
}

SuggestedProfile.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    key: PropTypes.string,
    userID: PropTypes.string.isRequired,
    profileDocId: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired
};