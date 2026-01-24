import Icon from "./Icon";

type Icon = {
  type: string;
  size: number;
  event: () => void;
};

function IconField({ type, size, event }: Icon) {
  return (
    <button className="c-icon" aria-label={type} onClick={event}>
      <Icon type={type} size={size} />
    </button>
  );
}

export default IconField;
