import Icon from "./Icon";

type Icon = {
  type: string;
  size: number;
};

function IconField({ type, size }: Icon) {
  console.log(type);
  return (
    <button className="c-icon" aria-label={type}>
      <Icon type={type} size={size} />
    </button>
  );
}

export default IconField;
