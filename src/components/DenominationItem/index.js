// Write your code here
import './index.css'

const DenominationItem = props => {
  const {money} = props
  const {onDisplay} = props
  console.log(money, onDisplay)

  const fif = () => {
    onDisplay(money)
  }

  return (
    <li className="moneySeg">
      <button type="button" className="rsplate" onClick={fif}>
        {money}
      </button>
    </li>
  )
}

export default DenominationItem
