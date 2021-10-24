// Position props can be one off
// "left-corner" | "left-top" | "left-bottom" | "center" | "center-top"
// "center-bottom" | "right-center" | "right-top" | "right-bottom"

type HorizonatalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<
        `${HorizonatalPosition}-${VerticalPosition}`, 
        'center-center'
    > | 'center'
}

export const Toast = ({position}:ToastProps) => {
    return <div>Toast Notification Postion - {position}</div>
}