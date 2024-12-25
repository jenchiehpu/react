type SomeChildComponentProps = {
  onClose: () => void,
};
const SomeChildComponent: React.FC<SomeChildComponentProps> = ({ onClose }) => {
  return (
    <div className="child-component p-3">
      <h1>child-component</h1>
      <button onClick={onClose}>Close Dialog</button>
    </div>
  );
};
export default SomeChildComponent;
