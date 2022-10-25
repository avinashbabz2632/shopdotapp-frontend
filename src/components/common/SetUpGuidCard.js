import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import './styles.css';

const SetUpGuidCard = ({ data }) => {
    return (
        <div>
            <div className="container setupGuidCardWrapper">
                {data.map((_, i) => (
                    <div className="setupGuidCard" key={i}>
                        <div className="cardContent">
                            <div className="cardLeftSide">
                                <IoMdCheckmarkCircleOutline
                                    size={26}
                                    color="#BDBCBD"
                                />
                                <p>{_.title}</p>
                            </div>
                            <a href={_.src}>Setup Guide</a>
                        </div>
                        {_.isInputRequired && (
                            <div className="inputWrapper">
                                <input placeholder="yourstore.myshopify.com" />
                                <button>Connect</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SetUpGuidCard;
