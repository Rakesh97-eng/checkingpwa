export const Buttons = ({rendererButtons,onReject,onAccept})=>{
    return (
        <div>
            Welcome !!
            {rendererButtons(onAccept)}
        </div>
    )
}