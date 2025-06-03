import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <div className="banner main-container flex between align-center ">
        <div className="specials">
          <h2>This weeks specials!</h2>
        </div>
        <div className="menu-button">
          <button>Online Menu</button>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src="/images/greek salad.jpg" alt="salad" />
          <div className="card-title">
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
          </div>
          <div className="card-food">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <div className="delivery">
              <Link to={"/order"} className="flex align-center">
                <p>
                  <b>Order a delivery</b>
                </p>
                <img src="assets/Truck.svg" alt="truck" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/images/bruchetta.jpg" alt="food" />
          <div className="card-title">
            <h3>Bruchetta</h3>
            <p className="price">$5.99</p>
          </div>
          <div className="card-food">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <div className="delivery">
              <Link to={"/order"} className="flex align-center">
                <p>
                  <b>Order a delivery</b>
                </p>
                <img src="assets/Truck.svg" alt="truck" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/images/lemon dessert.jpg" alt="dessert" />
          <div className="card-title">
            <h3>Lemon Dessert</h3>
            <p className="price">$5.00</p>
          </div>
          <div className="card-food">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <div className="delivery">
              <Link to={"/order"} className="flex align-center">
                <p>
                  <b>Order a delivery</b>
                </p>
                <img src="assets/Truck.svg" alt="truck" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
