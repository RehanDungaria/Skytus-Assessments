function Loader({ text = "Loading..." }) {
  return (
    <div className="loader-container">
      <div className="loader-circle"></div>

      <h2>{text}</h2>
    </div>
  );
}

export default Loader;