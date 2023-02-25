import PropTypes from 'prop-types';
import "./Feadback.module.css";

export const FeadbackOptions = ({ options,onLeaveFeedback}) => {
    const stateArray = Object.keys(options);
    return ( 
        <div>
            {stateArray.map(option => (
                <button key={option}
                    type="button"
                    name={option}
                    onClick={()=> onLeaveFeedback(option)}
                >
                 {option}
                </button>             
            ))}
        </div>
    )

}

FeadbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}