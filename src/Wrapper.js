function Wrapper({ children }) {
  const style = {
    margin : '20px',
    padding: '16px',
    border: '2px solid black'
  };
  return (
    <div style={style}>
        { children }
    </div>
  )
}

export default Wrapper;