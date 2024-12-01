export const Click = ({ label, fn }) => {
  function touch() {
    console.log("touched");
  }
  return (
    <>
      <button
        onClick={fn}
        onTouchStart={touch}
        className="p-3 m-2 bg-white text-center border "
      >
        {label}
      </button>
    </>
  );
};

export const Button = (props) => {
  return <button className="hover:none">{props.label}</button>;
};

export const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

export const Detail = (props) => {
  return <h1>{props.detail}</h1>;
};
