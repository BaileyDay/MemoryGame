import React from 'react';
import './MemoryCard.css';



class MemoryCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div className="MemoryCard" onClick={clickHandler}>
            <div className="MemoryCardInner">
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
    alert("Card Clicked")
}


export default MemoryCard;