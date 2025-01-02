import "./Style/DescForm.css";
import PropTypes from 'prop-types';

const DescForm = ({ propUp, propDown }) => {
  return (
    <div>
      <h3>{propUp}</h3>
      <p>{propDown}</p>
    </div>
  );
};

DescForm.propTypes = {
  propUp: PropTypes.string,
  propDown: PropTypes.string,
};

export default DescForm;
