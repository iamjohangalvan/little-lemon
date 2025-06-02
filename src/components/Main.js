import Cards from "./Cards";


function Main() {
  return (
    <div>
      <div className="main">
        <div className="main1">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned <br /> Mediterranean restaurant,<br /> focused on traditional<br /> recipes served with a modern<br /> twist</p>
          <button>Reserve a Table</button>
        </div>
        <div className="main2">
          <img src="/images/restauranfood.jpg" alt="food" />
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Main;