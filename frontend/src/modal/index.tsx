import ReactDOM from 'react-dom'
import './modal.css'

function Modal({children}: {children: React.ReactNode}) {
    const modalElement = document.querySelector('#modal');

    if (!modalElement) {
        throw new Error("No element with id 'modal' found");
    }
    return ReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        modalElement
    )
}

export{Modal}