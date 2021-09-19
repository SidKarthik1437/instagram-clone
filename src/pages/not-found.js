import { useEffect } from "react"

function notfound() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.title = "Not Found";
    }, [])

    return (
        <div className="bg-gray-background">
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl"> 
                    Not Found!
                </p>
            </div>
        </div>
    )
}

export default notfound
