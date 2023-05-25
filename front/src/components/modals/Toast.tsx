
interface ToastProps{
    text:string
    show:boolean
}

export const Toast: React.FC<ToastProps> = ({text, show}) => {

    return (
        <div
            className={
                " fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-zinc-700 opacity-50 z-30" +
                (show ? " block" : " hidden")
            }
        >
            <div className="bg-white w-1/5 h-44 p-4 opacity-100">{text}</div>
        </div>
    );
};