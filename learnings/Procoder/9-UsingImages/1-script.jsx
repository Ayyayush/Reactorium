// Import React (class-based React)
import React from "react";

// Import images so React can bundle them
import leftArrow from "./left-arrow.png";
import rightArrow from "./right-arrow.png";

/*
 * Apple Basket App (WITHOUT HOOKS)
 * --------------------------------
 * Uses a React Class Component.
 * This is the old but valid way to manage state in React.
 */
class App extends React.Component {
  
  // State is defined as an object
  state = {
    leftCount: 10,      // Basket 1 apples
    rightCount: 0       // Basket 2 apples
  };

  // Move apple from basket 1 → basket 2
  moveRight = () => {
    if (this.state.leftCount === 0) {
      alert("Oops basket 1 is empty now");
      return;
    }

    // setState updates state and re-renders UI
    this.setState({
      leftCount: this.state.leftCount - 1,
      rightCount: this.state.rightCount + 1
    });
  };

  // Move apple from basket 2 → basket 1
  moveLeft = () => {
    if (this.state.rightCount === 0) {
      alert("Oops basket 2 is empty now");
      return;
    }

    this.setState({
      rightCount: this.state.rightCount - 1,
      leftCount: this.state.leftCount + 1
    });
  };

  render() {
    return (
      // Main container
      <section style={{ display: "flex", alignItems: "center", gap: "20px" }}>

        {/* Basket 1 */}
        <div style={{ textAlign: "center" }}>
          <h1>{this.state.leftCount} apples</h1>
          <p>Basket 1</p>
        </div>

        {/* Left Arrow Button */}
        <button onClick={this.moveLeft}>
          <img src={leftArrow} alt="Move Left" width="40" />
        </button>

        {/* Right Arrow Button */}
        <button onClick={this.moveRight}>
          <img src={rightArrow} alt="Move Right" width="40" />
        </button>

        {/* Basket 2 */}
        <div style={{ textAlign: "center" }}>
          <h1>{this.state.rightCount} apples</h1>
          <p>Basket 2</p>
        </div>

      </section>
    );
  }
}

export default App;
