import * as React from 'react';
import Dialog from '@/components/Dialog';
import DialogWithContext from '@/components/DialogWithContext';
import SomeChildComponent from '@/components/SomeChildComponent';
import UseContextChildExample from '@/components/UseContextChildExample';

const App = () => {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const atDialogClose = React.useCallback(() => {
    setShow(false);
  }, []);

  const atDialogClose2 = React.useCallback(() => {
    setShow2(false);
  }, []);

  return (
    <div className="app">
      <button onClick={() => setShow(true)}>Dialog</button>
      <button onClick={() => setShow2(true)}>DialogWithContext</button>

      <Dialog show={show} onClose={atDialogClose}>
        <SomeChildComponent />
        <SomeChildComponent />
      </Dialog>

      <DialogWithContext show={show2} onClose={atDialogClose2}>
        <div className="container">
          <UseContextChildExample />
        </div>
      </DialogWithContext>
    </div>
  );
};
export default App;
