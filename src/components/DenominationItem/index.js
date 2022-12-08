// Write your code here

const DenominationItem = props => {
  let {money} = props
  const {onDisplay} = props

  const fif = () => {
    if (money >= 50) {
      money = money - 50
    }
    onDisplay(money)
  }

  const hun = () => {
    if (money >= 100) {
      money = money - 100
    }
    onDisplay(money)
  }

  const two = () => {
    if (money >= 200) {
      money = money - 200
    }
    onDisplay(money)
  }

  const fiv = () => {
    if (money >= 500) {
      money = money - 500
    }
    onDisplay(money)
  }
  return (
    <li className="moneySeg">
      <div className="mo">
        <button className="rsplate" onClick={fif}>
          50
        </button>
        <button className="rsplate" onClick={hun}>
          100
        </button>
      </div>
      <div className="mo">
        <button className="rsplate" onClick={two}>
          200
        </button>
        <button className="rsplate" onClick={fiv}>
          500
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
