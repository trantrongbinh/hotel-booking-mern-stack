import { Circles } from 'react-loader-spinner';
import demoData from '../../constants/demoData';
import useFetch from '../../constants/useFetch';
import './FeaturedProperties.scss'


// this <Component /> call from 🟨 ../../pages/Home.js 🟨 <Component />
const FeaturedProperties = () => {

    const { data, loading } = useFetch('/hotels?featured=true&limit=4&min=100&max=400');

    return (
        <div className='featuredProperties'>
            {
                loading
                    ? <Circles color="#003580" ariaLabel="loading-indicator" />
                    : data.map((item, i) => (
                        <div className="fpItem" key={i}>
                            <img
                                src={demoData.photos[i].src}
                                alt={item.name}
                                className="fpImg"
                            />
                            <span className="fpName"></span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                            {
                                item.rating &&
                                <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>
                            }
                        </div>
                    ))
            }
        </div>
    )
}

export default FeaturedProperties