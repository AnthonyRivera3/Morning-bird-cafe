function LocationSelector({
  title,
  locations,
  selectedLocation,
  setSelectedLocation,
}) {
  return (
    <div className="location-section">

      <h2>{title}</h2>

      <div className="location-list">

        {locations.map((location) => (

          <button
            type="button"
            key={location.id}
            className={
              selectedLocation === location.id
                ? "location-card selected"
                : "location-card"
            }
            onClick={() =>
              setSelectedLocation(location.id)
            }
          >

            <strong>
              {location.name}
            </strong>

            <span>
              {location.address}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}

export default LocationSelector;