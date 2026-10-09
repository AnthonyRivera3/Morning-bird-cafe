import "./Info.css";
import "./Info-mobile.css";

function Info() {

  const locations = [
    {
      id: 1,
      name: "Morning Bird Cafe - Manhattan",
      address: "226 Rector Avenue, New York, NY",
      weekdayHours: "6:00 AM - 7:00 PM",
      saturdayHours: "7:00 AM - 7:00 PM",
      sundayHours: "7:00 AM - 5:00 PM",
    },

    {
      id: 2,
      name: "Morning Bird Cafe - Brooklyn",
      address: " 2273 Bigmeech Avenue, Brooklyn, NY",
      weekdayHours: "6:00 AM - 7:00 PM",
      saturdayHours: "7:00 AM - 7:00 PM",
      sundayHours: "7:00 AM - 5:00 PM",
    },

    {
      id: 3,
      name: "Morning Bird Cafe - Jersey City",
      address: "223 Atlantic Lane, Jersey City, NJ",
      weekdayHours: "6:00 AM - 6:00 PM",
      saturdayHours: "7:00 AM - 6:00 PM",
      sundayHours: "7:00 AM - 4:00 PM",
    },

    {
      id: 4,
      name: "Morning Bird Cafe - Hoboken",
      address: "223 Birch Avenue, Hoboken, NJ",
      weekdayHours: "6:00 AM - 6:00 PM",
      saturdayHours: "7:00 AM - 6:00 PM",
      sundayHours: "7:00 AM - 4:00 PM",
    },
  ];


  return (
    <section
      id="locations"
      className="info-section"
    >

      <div className="info-container">

        <div className="info-heading">

          <p className="info-eyebrow">
            Come Visit Us
          </p>

          <h1>
            Locations & Hours
          </h1>

          <p className="info-description">
            Find a Morning Bird Cafe near you and stop by for your morning favorites.
          </p>

        </div>


        <div className="info-grid">

          {locations.map((location) => (

            <article
              className="info-card"
              key={location.id}
            >

              <h2>
                {location.name}
              </h2>

              <p className="info-address">
                {location.address}
              </p>


              <div className="info-hours">

                <h3>
                  Hours
                </h3>

                <p>
                  Monday - Friday

                  <span>
                    {location.weekdayHours}
                  </span>
                </p>

                <p>
                  Saturday

                  <span>
                    {location.saturdayHours}
                  </span>
                </p>

                <p>
                  Sunday

                  <span>
                    {location.sundayHours}
                  </span>
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Info;