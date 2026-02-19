/*
 * Button Component
 * ----------------
 * This component does NOT know what happens on click.
 * It just calls the function passed by parent.
 */
const Button = ({ imageUrl, clickHandler }) => {
  return (
    <button onClick={clickHandler}>
      <img src={imageUrl} alt="button" />
    </button>
  );
};

export default Button;
