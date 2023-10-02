function CardSideImage({ theme, buttonPosition, description,displayImage,displayText }) {
  return (
    <div
      className="card lg:card-side bg-base-100 shadow-xl m-auto my-3 mx-5"
      data-theme={theme}
      //  style={{position:"absolute",zIndex:"-2"}}
    >
      <figure className=" tilt-container" style={{ background: "black", maxWidth: "15rem" , display:`${displayImage}`}} >
        <img className="tilt "
          src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body" style={{ background: "black", maxWidth: "100%" , display:`${displayText}`}}>
        <h2 className="card-title">New movie is out!</h2>
        <p>
          {description}
        </p>
        <div className={`card-actions justify-${buttonPosition}`}>
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}
export default CardSideImage;
