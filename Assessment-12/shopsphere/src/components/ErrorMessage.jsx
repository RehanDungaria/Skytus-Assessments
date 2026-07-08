function ErrorMessage({
  message,
  onRetry,
}) {
  return (
    <div className="error-box">
      <h2>
        Oops! Something went wrong
      </h2>

      <p>{message}</p>

      <button
        className="error-btn"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;