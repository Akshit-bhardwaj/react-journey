// Creating Card Component

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img
          src={props.img}
          alt="planet image"
        />
        <h2>{props.name}</h2>
        <p className="about">
          Passionate software developer
        </p>
        <button>Check Profile</button>
      </div>
    </>
  );
};

export default Card;
