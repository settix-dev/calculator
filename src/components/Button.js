import PropTypes from 'prop-types'

const Button = ({name, handleClick}) => {
    return (
        <div>
          <button
          type="button" 
          value={name} 
          onClick={(e) => handleClick(e.target.value)}
          >
          {name}
          </button>  
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}

export default Button
