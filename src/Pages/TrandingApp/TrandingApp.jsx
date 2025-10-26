import download from "../../assets/icon-downloads.png"
import star from "../../assets/icon-ratings.png"
import { Link } from 'react-router-dom';

const TrandingApp = ({ singleApp }) => {

    const { title, downloads, ratingAvg, image, id } = singleApp

    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100  shadow-sm">
            <figure>
                <img className='rounded-xl mt-3'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline"><i className='w-3'><img src={download} alt="" /></i>{downloads}M</div>
                    <div className="badge badge-outline"><i className='w-3'><img src={star} alt="" /></i>{ratingAvg}M</div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default TrandingApp;