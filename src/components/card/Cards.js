import "./Cards.css";
import { Link } from 'react-router-dom';
import defaultImage from '../../default-image.jpeg'

const Cards = ({data, onClickCard}) => {

    const clickBtn = (event) => {
        onClickCard(parseInt(event.target.id));
    }

    const handleImgError = (e) => {
        e.target.src = defaultImage;
    }

    return (
        <div className="card">
            <a href={data.download_url} target="_blank">
                {/* <img src={data.download_url} alt={data.author} onError={handleImgError} /> */}
                <img src="123.jpg" alt={data.author} onError={handleImgError} />
            </a>
            <div className="container">
                <p className="author">{data.author}</p> 
                <a href={data.download_url} target="_blank">
                    <p className="id">#{data.id}</p> 
                </a>
            </div>
            <button className="btn" onClick={clickBtn} id={data.id}>DELETE</button>
        </div>
    )
}


export default Cards;