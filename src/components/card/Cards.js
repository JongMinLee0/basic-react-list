import '../../css/Cards.css';
import { Link } from 'react-router-dom';
import defaultImage from '../../default-image.jpeg';
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    Type
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const Cards = ({data, onClickCard, disableDelete=false}) => {

    const clickBtn = (event) => {
        onClickCard(parseInt(event.target.id));
    }

    const handleImgError = (e) => {
        e.target.src = defaultImage;
    }

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=>{}}>
                {disableDelete ? "" : <button className="btn" onClick={clickBtn} id={data.id}>DELETE</button>}
            </SwipeAction>
        </TrailingActions>
    );


    return (    
        <SwipeableList type={Type.IOS} fullSwipe={false}>
            <SwipeableListItem
                trailingActions={trailingActions()}
            >
                <div className="card">
                    <a href={data.download_url} target="_blank">
                        <img src={data.download_url} alt={data.author} onError={handleImgError} />
                    </a>
                    <div className="container">
                        <Link to={"/detail/" + data.author + "/" + data.id} >
                            <p className="author">{data.author}</p> 
                        </Link>
                        <a href={data.download_url} target="_blank">
                            <p className="id">#{data.id}</p> 
                        </a>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}


export default Cards;