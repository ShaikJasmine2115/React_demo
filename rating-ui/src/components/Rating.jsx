import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({feedbackMessages = ['Terrible', 'Poor', 'Mid', 'Good', 'Excellent']}) => {
    const stars = Array.from({length : 5}, (_, i)=>i+1);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => { 
        if (rating>0){
            setSubmitted(true);
        }
    }
    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    }
    
    return (
        <div className="rating-container">
            <h2>Rate your experience</h2>
            <div className = "stars">
                {stars.map((star)=>(
                    <Star 
                    key={star}
                    star={star} 
                    rating={rating} 
                    hover={hover}
                    ratingClick = {setRating}
                    hoverClick = {setHover}
                    hoverLeave = {()=> setHover(null)}
                    >

                    </Star>
                    // <span onClick = {()=> setRating(star)}
                    //       onMouseEnter={()=> setHover(star)}
                    //       onMouseLeave={()=> setHover(0)}
                    // key = {star} className = {`star ${star <= (hover || rating) ? 'active' :  ''}`}>
                    //     {'\u2605'}
                    // </span>
                ))}
            </div>
            {rating > 0 && <p >{`They perfomed ${feedbackMessages[rating - 1]}`}</p>}
            {/* <button
                className = "submit-btn" 
                onClick ={handleSubmit} 
                disabled={rating===0} 
                >
                Submit 
            </button> */}
            <Button className= 'submit-btn' onClick={handleSubmit} disabled={rating===0}>Submit</Button>
            <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
        </div>
    )
}

export default Rating;