import PropTypes from 'prop-types';
import "./Notification.module.css";

export const Notification = ({ message }) => {
    return message && <p>{message}</p>;
};

Notification.propTypes = {
    message: PropTypes.string,
}