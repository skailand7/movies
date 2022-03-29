const Carrousel = () => {
  return (
    <div>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-96"
              src="https://source.unsplash.com/user/erondu/3000x900"
              alt="image"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-96"
              src="https://source.unsplash.com/collection/190727/3000x900"
              alt="image"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-96"
              src="https://source.unsplash.com/collection/190728/3000x900"
              alt="image"
            />
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>

      {/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
    </script> */}
    </div>
  );
};

export default Carrousel;
