function HeroArtistic() {
  return (
    <div
      className="hero  object-contain"
      style={{
        backgroundImage: "url(/src/img/18-removebg-preview.png)",
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat",
        height:"40rem"
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline btn-white text-white mt-5">Get Started</button>
        </div>
      </div>
    </div>
  );
}
export default HeroArtistic;
