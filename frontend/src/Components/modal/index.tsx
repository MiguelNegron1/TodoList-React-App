import ReactDOM from 'react-dom'
import './modal.css'

function Modal({children}) {

    return ReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        document.querySelector('#modal')
    )
}

export{Modal}