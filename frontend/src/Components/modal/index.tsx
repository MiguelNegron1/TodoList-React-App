import ReactDOM from 'react-dom'
import './modal.css'

function Modal({children} : {children: React.ReactNode}) {
    const modal = document.querySelector('#modal');
    if(!modal){
        throw new Error('You need to have a div with id modal in your index.html')
    }
    return ReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        modal
    )
}

export{Modal}