import '../sass/Button.scss'

export const Button = ({ btn, fn }) => {
    return (
        <div className='btn-box'>
            <button
                className='btn'
                onClick={fn}>
                {btn}
            </button>
            <div className='btn-shadow'></div>
        </div>
    )
}
