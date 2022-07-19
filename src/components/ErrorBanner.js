import PropTypes from "prop-types";
import "./../styles/ErrorBanner.css";

const ErrorBanner = ({ message }) => {
  return <div className="error-banner">{message}</div>;
};

export default ErrorBanner;

ErrorBanner.propTypes = {
  message: PropTypes.string.isRequired,
};
