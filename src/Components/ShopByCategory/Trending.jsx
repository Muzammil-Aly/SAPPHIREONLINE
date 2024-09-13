import React from "react";

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [data.length]);

  // Move to the next slide manually
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={item.imageUrl} alt={item.CategoryNamee} />
            <p>{item.CategoryNamee}</p>

            {/* Button that appears on hover */}
            <button className="buy-button">Want to Buy</button>
          </div>
        ))}
      </div>

      {/* Right-side button that appears on hover */}
      <div className="next-button" onClick={goToNextSlide}>
        &gt;
      </div>
    </div>
  );
};

export default Trending;
