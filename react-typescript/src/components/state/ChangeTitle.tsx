import { useEffect, useState } from 'react';


export const ChangeTitle = () => {

    const [title, settitle] = useState<string | null>(null)

    useEffect(() => {
        if (title !== null) {
            document.title = title;
        }
    }, [title])

    return (
        <div>
            <input
                type="text"
                name="changeTitle"
                onChange={(e) => settitle(e.target.value)}
            />
        </div>
    )
}
