// Button component
// This component shows a button with an image inside it

const Button = ({ imageUrl }) => {
  return (
    // HTML button element
    // title attribute shows tooltip on hover
    <button title="hello">

      {/* 
        img tag inside button
        src comes from parent component via props
      */}
      <img src={imageUrl} alt="button" />

    </button>
  );
};

// Export Button so other components can use it
export default Button;
