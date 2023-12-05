import './Todosloading.css'

function Todosloading() {
    return(
        <div className='loadingContainer'>

            <h1>Searching for the to-dos</h1>
            <div className='dot-container'>
                <div id="dot1" className='dot'></div>
                <div id="dot2" className='dot'></div>
                <div id="dot3" className='dot'></div>
            </div>
        </div>
    )
}

export {Todosloading};