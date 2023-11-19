import "./Container.css";

const Container = ({ title, children, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {first}
      {second}
      {children}
    </div>
  );
};

export default Container;
