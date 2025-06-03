import Cards from "../components/Cards";

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="main-container flex between">
          <div className="content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned <br /> Mediterranean restaurant,
              <br /> focused on traditional
              <br /> recipes served with a modern
              <br /> twist
            </p>
            <button>Reserve a Table</button>
          </div>
          <div className="image">
            <img src="/images/restauranfood.jpg" alt="food" />
          </div>
        </div>
      </div>
      <div className="cards-section">
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;
