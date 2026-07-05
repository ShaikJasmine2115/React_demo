const RatingWithCSS = () => {
    return (
      <div style={ styles.container }>
        {/* inline CSS, with two {{}}
      <div  style ={{
        textAlign: "center",
        fontFamily: "Arial",
        padding: "20px"
      }}> */}
        <h2 style ={styles.heading}>Rate your experience</h2>
        
      </div>
    )
  }

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px"
  },
  heading : { color : 'blue'}
}

 export default RatingWithCSS;