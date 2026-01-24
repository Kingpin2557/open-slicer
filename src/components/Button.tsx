type Button = {
  label: string;
  event: () => void;
};

function Button({ label, event }: Button) {
  return (
    <button className="c-button" onClick={event}>
      {label}
    </button>
  );
}

export default Button;
