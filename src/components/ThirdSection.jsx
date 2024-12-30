
const ThirdSection = () => {
    const cars = [
      {
        id: 1,
        src: "../../public/car4.png",
        alt: "car",
      },
      {
        id: 2,
        src: "../../public/car5.png",
        alt: "car",
      },
      {
        id: 3,
        src: "../../public/car6.png",
        alt: "car",
      },
    ];
  return (
    <div>
      <div className="third">
        <div className="third_small">
          <p>All Car</p>
        </div>
        <div className="third_large">
          <h2>Leading Dealer in New and Used Car</h2>
        </div>
        <div className="third_paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            temporibus voluptatem aliquid dolores enim sed nostrum esse
            repudiandae quaerat numquam.
          </p>
        </div>
        <div className="third_images">
          {cars.map((car) => (
            <>
              <div className="third_images_car" key={car.id}>
                <img src={car.src} alt={car.alt} />
              </div>
            </>
          ))}
        </div>
        <div className="third_images_car_circle">
          <div className="active"></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection
