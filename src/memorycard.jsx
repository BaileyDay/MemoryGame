import React from 'react';
import './MemoryCard.css';



class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }


    render() {
        let MemoryCardInnerClass = (this.state.isFlipped) ? "MemoryCardInner flipped" : "MemoryCardInner";



        return <div className="MemoryCard" onClick={clickHandler.bind(this)}>
            <div className={MemoryCardInnerClass}>
                <div className="MemoryCardBack">
                    <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="" />
                </div>
                <div className="MemoryCardFront">
                    ∆
                </div>
            </div>
        </div>
    }

}
function clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
}


export default MemoryCard;