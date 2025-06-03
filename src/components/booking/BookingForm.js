function BookingForm() {
  return (
    <div>
      <div className="hero">
        <div className="main-container flex between">
          <div className="form">
            <h2>Booking details</h2>
            <h3>Find a table for any ocassion</h3>
            <img src="/images/restaurant.jpg" alt="chef" />
            <img src="/images/restaurant chef B.jpg" alt="" />
            <form>
              <input
                type="datetime-local"
                id="date"
                name="date"
                placeholder="Date and Time"
              />

              <select name="number" id="number">
                <option>Number of Dinners</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>

              <select name="number" id="number">
                <option>Ocassion</option>
                <option value="birthday">2</option>
                <option value="wedding">3</option>
                <option value="family">4</option>
              </select>

              <p>Seating options</p>

              <input type="radio" id="standard" name="seatopt" />
              <label for="standard">Standard</label>

              <input type="radio" id="outside" name="seatopt" />
              <label for="outside">Outside</label>

              <h3>Credit Card details</h3>

              <label for="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First/Last Name"
              />

              <label for="card">Card Number:</label>
              <input type="text" id="card" name="card" />

              <label for="card">Exp Date</label>
              <input type="date" id="card" name="exp" />

              <label for="cvv">CVV</label>
              <input type="number" id="cvv" name="cvv" />

              <input type="submit" value="Book" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
