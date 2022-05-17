function CreateList({ title, date, onChange, onCreate }) {
  return(
    <div>
      
      <input
        className="title"
        placeholder="title"
        onChange={ onChange }
        value={ title }
      />
      <input
        className="date"
        placeholder="date"
        onChange={ onChange }
        value={ date }
      />
      <div>
        <h4>title: { title }</h4>
        <p>date: { date }</p>
      </div>

      <button onClick={ onCreate }>submit</button>
    </div>
  )
}

export default CreateList;