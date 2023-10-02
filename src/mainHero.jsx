import CarouselMain from "./caroselMain";

function MainHero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <CarouselMain />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>{" "}
        </div>
      </div>
    </div>
  );
}
export default MainHero;
