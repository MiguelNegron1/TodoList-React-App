import './Todosloading.css'

function Todosloading() {
    return(
        <div className='loadingContainer'>

            <h1>Buscando los Todos</h1>
            <div className='dot-container'>
                <div id="dot1" className='dot'></div>
                <div id="dot2" className='dot'></div>
                <div id="dot3" className='dot'></div>
            </div>
        </div>
    )
}

export {Todosloading};