function ErrorMessage({ message }) {
  return (
    <div className="error-box">
      <h3>❌ Error</h3>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;