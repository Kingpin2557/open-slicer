import Icon from "./Icon";

type Icon = {
  type: string;
  size: number;
};

function IconField({ type, size }: Icon) {
  return (
    <button className="c-icon">
      <Icon type={type} size={size} />
    </button>
  );
}

export default IconField;
