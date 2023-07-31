import "./style/PhraseStyle.css"


const PhraseComponent = ({handleClick, quote}) => {
  return (
    <article>
        <p>{quote.phrase}</p>
        <button onClick={handleClick}>⮎</button>
        <h4>{quote.author}</h4>
    </article>
  )
}

export default PhraseComponent