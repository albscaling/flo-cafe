interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

const MenuItem = ({ name, description, price }: MenuItemProps) => {
  return (
    <div className="flex justify-between items-start py-4 border-b border-cafe-brown/10 last:border-b-0 hover:bg-cafe-yellow/10 px-2 -mx-2 rounded transition-colors">
      <div className="flex-1">
        <h4 className="font-medium text-cafe-brown">{name}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <span className="font-semibold text-cafe-red ml-4 whitespace-nowrap">{price}</span>
    </div>
  );
};

export default MenuItem;
