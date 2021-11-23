import './Container.css'
const Container = ({children}) => {
    return(
        <div className={'container'}>
            {children}
        </div>
    )
}

export {Container}