const DeacreaseButton = ({ decrease }) => {
    return (
      <button className="btn btn-primary me-3 ms-3" onClick={decrease}>
        Decrease
      </button>
    );
  };
  
  export default DeacreaseButton;