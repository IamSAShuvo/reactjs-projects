function Buttons({ onColorChange, colour, children }) {
  return (
    <>
      <button
        onClick={() => onColorChange(colour)}
        className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
        style={{ backgroundColor: colour }}
      >
        {children}
      </button>
    </>
  );
}

export default Buttons;
