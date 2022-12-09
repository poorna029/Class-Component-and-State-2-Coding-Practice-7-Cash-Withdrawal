// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onDisplay = amount => {
    let {money} = this.state
    if (money >= amount) {
      money -= amount
      const remaining = money

      this.setState({money: remaining})
    }
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="master">
        <div className="main">
          <div className="sara">
            <h1 className="image-pro">S</h1>
            <h1 className="saraName">Sarah Williams</h1>
          </div>
          <div className="yb">
            <div className="ybho">
              <p className="ybh">Your Balance</p>
            </div>

            <div className="acc">
              <p className="money">{money}</p>
              <p className="IR">In Rupees</p>
            </div>
          </div>
          <p className="withD">Withdraw</p>
          <p className="choseSum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ulclass">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                money={each.value}
                onDisplay={this.onDisplay}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
