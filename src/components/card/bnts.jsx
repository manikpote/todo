import { Click, Button } from "../reuseableComponents/button";
export const Btns = () => {
  const data = [
    { id: 1, item: "apple" },
    { id: 2, item: "banana" },
    { id: 3, item: "orange" },
    { id: 4, item: "guava" },
  ];

  function handleClick() {
    alert("hey");
  }
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <Click label={item.item} onclick={handleClick} />
        </div>
      ))}
      <div className="ml-10 ">
        <Click label={"hey"} />
      </div>
      <Button />
    </>
  );
};
