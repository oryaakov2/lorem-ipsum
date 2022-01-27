import React, { useState } from 'react';
import data from './data';
function App() {

  const [paragraphs, setParagraphs] = useState([])
  const [amount, setAmount] = useState(0)

  const changeHandler = (e) => {
    setAmount(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (parseInt(amount) > data.length) {
      setParagraphs(data)
      return;
    }
    if (parseInt(amount) <= 0) {
      setParagraphs(data.slice(0, 1))
      return;
    }

    setParagraphs(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={changeHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" value={amount} onChange={changeHandler} />
        <button className="btn" type="button" onClick={submitHandler}>generate</button>
      </form>
      <article className='text'>
        {paragraphs.map((paragraphText, index) => {
          return (
            <p key={index}>{paragraphText}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App;
