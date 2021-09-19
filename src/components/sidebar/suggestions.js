import { useState, useEffect } from "react"
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import firebase from "../../lib/firebase";
import { getSuggestedProfiles } from "../../services/firebase"
import SuggestedProfile from "./SuggestedProfile"

export default function Suggestions({ userID, following, loggedInUserDocId }) {

    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        async function SuggestedProfiles() {
            const response = await getSuggestedProfiles(userID, following);
            setProfiles(response)
        }

        if (userID) {
            SuggestedProfiles();
        }

    }, [userID]);

    // eslint-disable-next-line no-nested-ternary
    return !profiles ? (
        <Skeleton count={3} width={300} height={50} />
    ) : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-item justify-between mb-2">
                <p className="font-bold text-gray-base">Suggestions for you</p>
            </div>
            <div className="mt-4 grid gap-5">
                {profiles.map((profile) => (
                    <SuggestedProfile
                        key={profile.docId}
                        profileDocId={profile.docId}
                        username={profile.username}
                        profileId={profile.userID}
                        userID={userID}
                        loggedInUserDocId={loggedInUserDocId}
                    />
                )
                )}
            </div>
        </div>
    ) : null;
}

Suggestions.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    userID: PropTypes.string,
    following: PropTypes.array,
    loggedInUserDocId: PropTypes.string
};