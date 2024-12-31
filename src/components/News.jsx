import { FaArrowRightLong } from "react-icons/fa6";
const News = () => {
    const news = [
      {
        id: 1,
        heading: "mystery chevy compact suv spied, might slot below equinox",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus totam asperiores a soluta modi consequuntur harum voluptatum omnis repudiandae!",
        date: "puriwp . March 12,2022",
        src: "../../public/pexels-brettjordan-842528.jpg",
      },
      {
        id: 2,
        heading:
          "2023 Audi E-Tron drifting through winter tuning and calibration",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus totam asperiores a soluta modi consequuntur harum voluptatum omnis repudiandae!",
        date: "puriwp . March 12,2022",
        src: "../../public/pexels-tinchflicks-29112761.jpg",
      },
      {
        id: 3,
        heading: "musk's plan for tesla-built batteries has an acceleration challenge",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus totam asperiores a soluta modi consequuntur harum voluptatum omnis repudiandae!",
        date: "puriwp . March 12,2022",
        src: "../../public/pexels-vladimirsrajber-21407450.jpg",
      },
    ];
  return (
    <div>
      <div className="news">
        <div className="top">
          <div className="text">
            <p>From Our Blog</p>
            <h2>News & Article</h2>
          </div>
          <div className="link">
            More <FaArrowRightLong />
          </div>
        </div>
        <div className="bottom">
          {news.map((news) => (
            <div className="news_card" key={news.id}>
              <img src={news.src} alt={news.heading} />
              <div className="heading">
                <h2>
                 {news.heading}
                </h2>
                  </div>
                  <div className="text">
                      {news.text}
                  </div>
                  <div className="date">
                      <p>
                          {news.date}
                      </p>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
