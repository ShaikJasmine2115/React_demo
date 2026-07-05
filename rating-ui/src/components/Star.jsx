const Star = ({ star, rating, hover, ratingClick, hoverClick, hoverLeave }) =>{
    return ( 
        <span 
            onClick={()=> ratingClick(star)}
            onMouseEnter={()=> hoverClick(star)}
            onMouseLeave={hoverLeave}
            key={star} 
            className= {`star ${star <= (hover || rating) ? 'active' :  ''}`}>
                {'\u2605'}
        </span>
    )
}

export default Star;