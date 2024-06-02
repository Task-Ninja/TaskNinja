import { ProfileProps } from "./Profile";
import { Profile } from "./profileRepository";


const renderStars = (rating: number): JSX.Element => {
    const stars = [];
    const totalStars = 5;
    for(let i = 1; i <= totalStars; i++){
        if(i <= rating) {
            stars.push(<span key={i} className="text-yellow-400">&#9733;</span>)
        }else{
            stars.push(<span key={i} className="text-gray-400">&#9733;</span>)
        }
    }
    return <>{stars}</>
}

export default renderStars;