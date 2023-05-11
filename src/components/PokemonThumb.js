import { Link } from "react-router-dom"

export default function PokemonThumb({ id, name, image, type }) {

    const style = `thumb-container ${type}`
    return (
        <div className={style}>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <Link to={name}><img src={image} alt={name} loading='lazy' /></Link>

            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}
