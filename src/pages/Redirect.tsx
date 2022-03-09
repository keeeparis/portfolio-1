import { FC, useEffect } from 'react'

const Redirect:FC<{link: string}> = ({ link }) => {    
    useEffect(() => {
        window.location.replace(link)
    })

    return (
        <>
            Redirecting...
        </>
    )
}

export default Redirect