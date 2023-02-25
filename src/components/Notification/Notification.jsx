import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return message && <span>{message}</span>;
};

Notification.propTypes = {
    message: PropTypes.string,
}