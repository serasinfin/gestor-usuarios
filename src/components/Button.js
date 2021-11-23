import './Button.css'
const Button = ({children}) => {
    return(
        <button className={'button'}>
            {children}
        </button>
    )
}

export {Button}