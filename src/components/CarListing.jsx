
const CarListing = () => {
    const cars = [
      {
        id: 1,
        location: "Chicago,United States",
        brand: "Toyota Yaris Heykers Manual",
        tag: "New Car",
        distance: "67000 KM",
        date: "2017",
        price: "$15,000",
        src: "../../public/car2.png",
      },
      {
        id: 2,
        location: "Chicago,United States",
        brand: "Toyota Yaris Heykers Manual",
        tag: "New Car",
        distance: "67000 KM",
        date: "2017",
        price: "$15,000",
        src: "../../public/car4.png",
      },
      {
        id: 3,
        location: "Chicago,United States",
        brand: "Toyota Yaris Heykers Manual",
        tag: "New Car",
        distance: "67000 KM",
        date: "2017",
        price: "$15,000",
        src: "../../public/car5.png",
      },
      {
        id: 4,
        location: "Chicago,United States",
        brand: "Toyota Yaris Heykers Manual",
        tag: "New Car",
        distance: "67000 KM",
        date: "2017",
        price: "$15,000",
        src: "../../public/car6.png",
      },
      {
        id: 5,
        location: "Chicago,United States",
        brand: "Toyota Yaris Heykers Manual",
        tag: "New Car",
        distance: "67000 KM",
        date: "2017",
        price: "$15,000",
        src: "../../public/car2.png",
      },
      {
        id: 6,
        location: "Chicago,United States",
        brand: "Toyota Yaris Heykers Manual",
        tag: "New Car",
        distance: "67000 KM",
        date: "2017",
        price: "$15,000",
        src: "../../public/car4.png",
      }
    ];
  return (
    <div>
          <div className="car-listing-section">
              {/* top-section */}
              <div className="top">
                  <p>Car Listing</p>
                  <h2>Find New and USed Cars of Various Brands Only at Carsento</h2>
              </div>

              {/* cars-listing */}
              <div className="">
                  {cars.map((car) => {
                      <div className="" key={car.id}>
                        <h2>{car.brand}</h2>
                      </div>;
                  })}
              </div>
      </div>
    </div>
  )
}

export default CarListing
