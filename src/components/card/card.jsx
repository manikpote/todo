import { Title, Button, Detail } from "../reuseableComponents/button";

export const Card = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-3 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-red-700 border-[2px] p-3 bg-white"
            draggable="true"
          >
            <Title title={product.title} />
            <Detail detail={product.details} />
            <Button label={product.label} />
          </div>
        ))}
      </div>
    </>
  );
};
