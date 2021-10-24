type GreedProps = {
    name: string
    messageCOunt?:number
    isLoggedIn:boolean
}

export const Greet = ({name,messageCOunt=0 ,isLoggedIn}:GreedProps) => {

    

    return (
        <div>
            <h2>
                {
                    isLoggedIn 
                        ? `Welcome ${name}! You have ${messageCOunt} unread messages` 
                        : `Welcome Guest`
                }
            </h2>
        </div>
    )
}