import '../sass/Card.scss'

export const Card = ({ img, name }) => {
    return (
        <div className="card">
            <p className="card-name">{name}</p>
            <div className="card-circle"></div>
            <img src={img} alt="poke-img" className="card-img" />
        </div>
    )
}
