const Button = (props) => {
  const { onClick, text } = props;
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 hover:bg-gray-400 text-black
      font-semibold py-0 px-3 border border-black hover:border-black rounded"
    >
      {text}
    </button>
  );
};

export default Button;
