import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render() {
        return <div className="MemoryCard">
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

export default MemoryCard;