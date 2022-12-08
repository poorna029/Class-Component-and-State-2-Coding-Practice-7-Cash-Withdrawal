// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onDisplay = amount => {
    this.setState({money: amount})
  }

  render() {
    const {money} = this.state

    return (
      <ul className="master">
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

          <DenominationItem money={money} onDisplay={this.onDisplay} />
        </div>
      </ul>
    )
  }
}

export default CashWithdrawal
