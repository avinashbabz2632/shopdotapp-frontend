import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import './styles.css';

const SetUpGuidCard = ({
  data,
  callback,
  onChangeText,
  disable,
  connectCallback,
  onboardStep,
  shopifyUrl,
}) => {
  console.log(disable, 'disable');
  return (
    <div>
      <div className="container setupGuidCardWrapper">
        {data.map((_, i) => {
          const currentKey = i + 1;
          return (
            <div
              onClick={() => {
                if (!_.isInputRequired && onboardStep == currentKey) {
                  callback(_.key);
                }
              }}
              className="setupGuidCard"
              style={{ opacity: currentKey <= onboardStep ? 1 : 0.5 }}
              key={i}
            >
              <div className="cardContent">
                <div className="cardLeftSide">
                  <IoMdCheckmarkCircleOutline
                    size={26}
                    color={currentKey < onboardStep ? '#219653' : '#BDBCBD'}
                  />
                  <p>{_.title}</p>
                </div>
                {!_.isInputRequired ? <a href={_.src}>Setup Guide</a> : <div />}
              </div>
              {_.isInputRequired && (
                <div>
                  {onboardStep > 1 ? (
                    <div className="alert-success">
                      {`${shopifyUrl} is Connected`}{' '}
                    </div>
                  ) : (
                    <div className="inputWrapper">
                      <input
                        placeholder="yourstore.myshopify.com"
                        onChange={onChangeText}
                        value={shopifyUrl}
                      />
                      <button
                        disabled={disable}
                        className={disable ? 'btn-disable' : null}
                        onClick={connectCallback}
                      >
                        Connect
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetUpGuidCard;
