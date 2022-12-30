import React, { useEffect, useState } from 'react';
import logoPng from '../../../assets/images/logos/logo-png.png';
import Button from '../../../components/common/Button';
import { LinkMod } from '../../../components/common/A';
import tickIcon from '../../../assets/images/icons/tick.svg';
import tickGreenIcon from '../../../assets/images/icons/tick-green.svg';
import checkTrue from '../../../assets/images/icons/check-white.svg';
import exclmenationIcon from '../../../assets/images/icons/acculturation.svg';
import '../../Brand/Style/brand.style.scss';
import '../../Brand/Style/brand.dev.scss';
import '../../Brand/Style/brand.media.scss';
import BrandHeader from '../../../components/Header/BrandHeader';

export default function BrandOnBoarding() {
    const [openGuide, setOpenGuide] = useState(false);
    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false);
    const [boardingStep, setBoardingStep] = useState(1);
    const [storeName, setStoreName] = useState('');
    const [isStoreNameValid, setIsStoreNameValid] = useState(false);

    const changeDisable = () => {
        console.log('step', stepOne);
        if (stepOne) {
            setBoardingStep(2);
        } else if (stepTwo) {
            setBoardingStep(3);
        } else if (stepThree) {
            setBoardingStep(4);
        }
    };

    useEffect(() => {
        changeDisable();
    }, [stepOne, stepTwo, stepThree, stepFour]);

    const handleOpenGuide = () => {
        setOpenGuide(!openGuide);
    };

    const handleConnect = (step) => {
        if (step == 1) {
            setStepOne(true);
        } else if (step == 2) {
            setStepTwo(true);
        } else if (step == 3) {
            setStepThree(true);
        } else if (step == 4) {
            setStepFour(true);
        }
    };

    const handleSetStoreName = (e) => {
        const fixedSuffix = ['myshopify', 'com'];
        const storeName = e.target.value;
        const isValid = storeName
            .split('.')
            .some((item) => fixedSuffix.includes(item));
        setIsStoreNameValid(isValid);
        setStoreName(e.target.value);
    };

    return (
        <>
            <BrandHeader />
            <div className="wrapper onbording">
                <main>
                    <section>
                        <div className="ob-head oh-setting">
                            <h1>Getting Started</h1>
                        </div>
                        <div className="ob-body">
                            <div className="form-wrapper fw-wide">
                                <form className="form" id="">
                                    <div className="w-100 form-area">
                                        <div className={'confirm-setting-area'}>
                                            <div className="cs-item">
                                                {!stepOne ? (
                                                    <img src={tickIcon}></img>
                                                ) : (
                                                    <img
                                                        src={tickGreenIcon}
                                                    ></img>
                                                )}
                                                <span
                                                    href=""
                                                    className="cs-label"
                                                >
                                                    Configure your mandatory
                                                    &nbsp;
                                                    <LinkMod
                                                        className="ob-link"
                                                        to={'/brand/setting/'}
                                                    >
                                                        Settings
                                                    </LinkMod>
                                                </span>
                                                <a
                                                    href="https://intercom.help/shopdot/en/articles/6549401-how-do-i-confirm-my-settings-and-preferences"
                                                    target="_blank"
                                                    className="cs-link"
                                                >
                                                    Setup Guide
                                                </a>
                                            </div>
                                        </div>
                                        <div className="confirm-setting-area">
                                            <div className="cs-item">
                                                {!stepTwo ? (
                                                    <img src={tickIcon}></img>
                                                ) : (
                                                    <img
                                                        src={tickGreenIcon}
                                                    ></img>
                                                )}
                                                <span className="cs-label">
                                                    Connect your Shopify store
                                                </span>
                                                <LinkMod
                                                    className="cs-link"
                                                    onClick={handleOpenGuide}
                                                >
                                                    Setup Guide
                                                </LinkMod>
                                            </div>
                                            {openGuide && !stepTwo && (
                                                <div className="integration_info">
                                                    <div className="form-area form-input connect-shopify">
                                                        <input
                                                            type="text"
                                                            className="form-control mb-0"
                                                            id=""
                                                            placeholder=""
                                                            onChange={
                                                                handleSetStoreName
                                                            }
                                                        />
                                                        <span className="input-extension">
                                                            .myshopify.com
                                                        </span>
                                                        <Button
                                                            className="button p-0 connect_shopify"
                                                            type="button"
                                                            disabled={
                                                                !isStoreNameValid &&
                                                                storeName.length >
                                                                    0
                                                                    ? false
                                                                    : true
                                                            }
                                                            id="button-addon2"
                                                            onClick={() => {
                                                                if (
                                                                    !isStoreNameValid
                                                                ) {
                                                                    handleConnect(
                                                                        2
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            Connect
                                                        </Button>
                                                    </div>
                                                    <small>
                                                        Enter the name of your
                                                        store without
                                                        myshopify.com
                                                    </small>
                                                    {isStoreNameValid && (
                                                        <div className="invalid-feedback mb-0">
                                                            Please only enter
                                                            the name of your
                                                            store
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {stepTwo && (
                                                <div className="input-group form-input">
                                                    <div
                                                        className="alert alert-success"
                                                        role="alert"
                                                    >
                                                        {storeName} is connected
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className={`confirm-setting-area ${
                                                boardingStep == 3 || stepThree
                                                    ? ''
                                                    : 'light-item'
                                            }`}
                                        >
                                            <div className="cs-item">
                                                {!stepThree ? (
                                                    <img src={tickIcon}></img>
                                                ) : (
                                                    <img
                                                        src={tickGreenIcon}
                                                    ></img>
                                                )}
                                                <span className="cs-label">
                                                    Add{' '}
                                                    <LinkMod className="ob-link">
                                                        Shopify Products
                                                    </LinkMod>{' '}
                                                    to ShopDot
                                                </span>
                                                <button className="button button-blue">
                                                    Sync Products
                                                </button>
                                                <a
                                                    href="https://intercom.help/shopdot/en/articles/6549402-how-do-i-add-shopify-products-to-shopdot"
                                                    target="_blank"
                                                    className="cs-link"
                                                >
                                                    Setup Guide
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            className={`confirm-setting-area ${
                                                boardingStep == 4 || stepFour
                                                    ? ''
                                                    : 'light-item'
                                            }`}
                                        >
                                            <div className="cs-item pointer-none">
                                                {!stepFour ? (
                                                    <img src={tickIcon}></img>
                                                ) : (
                                                    <img
                                                        src={tickGreenIcon}
                                                    ></img>
                                                )}
                                                <span
                                                    href=""
                                                    className="cs-label"
                                                >
                                                    Activate your&nbsp;
                                                    <LinkMod
                                                        className="ob-link"
                                                        to={'/brand/setting/'}
                                                    >
                                                        Settings
                                                    </LinkMod>
                                                </span>
                                                <button className="button button-blue">
                                                    Sync Products
                                                </button>
                                                <a
                                                    href="https://intercom.help/shopdot/en/articles/6549404-how-do-i-activate-a-product"
                                                    className="cs-link"
                                                >
                                                    Setup Guide
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="steps step-left">
                                <div className="step-indicator">
                                    <h6>Getting Started</h6>
                                    <div className="si-info">
                                        <img
                                            src={checkTrue}
                                            alt="confirm your setting"
                                        />{' '}
                                        Confirm your settings
                                    </div>
                                </div>

                                <div className="step-indicator-wide">
                                    <h6>Getting Started (0/4)</h6>
                                    <div className="si-info not-completed">
                                        <img
                                            src={exclmenationIcon}
                                            alt="connet your shopify store"
                                        ></img>{' '}
                                        <span className="link">
                                            {' '}
                                            Configure your mandatory Settings
                                        </span>
                                    </div>
                                    <div className="si-info">
                                        <img
                                            src={checkTrue}
                                            alt="confirm your settings"
                                        ></img>{' '}
                                        <span className="link">
                                            {' '}
                                            Connect your Shopify store
                                        </span>
                                    </div>
                                    <div className="si-info">
                                        <img
                                            src={checkTrue}
                                            alt="Add shopify products to shopdot"
                                        />{' '}
                                        <span className="link">
                                            Add Shopify producs to Shopdots
                                        </span>
                                    </div>
                                    <div className="si-info not-completed">
                                        <img
                                            src={checkTrue}
                                            alt="Activate your product"
                                        />{' '}
                                        <span className="link">
                                            Activate your products
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
