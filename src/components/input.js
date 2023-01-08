const Input = (props) => {
  const { onChange, reference, className } = props;

  return (
    <input
      className={`basic-input ${className}`}
      onChange={onChange}
      ref={reference}
    />
  );
};

export default Input;
