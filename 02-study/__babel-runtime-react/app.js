const App = ()=>{
  const [count, setCount] = React.useState(1);
  return (
    <div>
      <h1>Hi, React, {count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>increment</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);