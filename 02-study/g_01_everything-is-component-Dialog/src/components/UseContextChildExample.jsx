import { useDialogContext } from './DialogWithContext/DialogContext';

const UseContextChildExample = () => {
  const { onClose } = useDialogContext();

  return (
    <div>
      <h1>UseContextChildExample</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default UseContextChildExample;
