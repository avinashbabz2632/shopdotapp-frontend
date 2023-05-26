import React, { useCallback, useState } from 'react';
import ProductCartEmpty from '../../images/product-card-empty.svg';
import InviteRetailer from '../../common/components/InviteRetailerHeaderModal';
import DeclineRetailerModel from '../../common/components/DeclineRetailerModel';

function NoDataComponent() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isDeclineModelOpen, setIsDeclineModelOpen] = useState(false);

    const opencloseRetailerModal = useCallback(() => {
        setIsOpen(!modalIsOpen);
    }, [modalIsOpen]);

    const opencloseDeclineRetailerModal = useCallback(() => {
        setIsDeclineModelOpen(!isDeclineModelOpen);
    }, [isDeclineModelOpen]);

    return (
        <>
            <InviteRetailer
                modalIsOpen={modalIsOpen}
                opencloseRetailerModal={opencloseRetailerModal}
            />
            <DeclineRetailerModel
                modalIsOpen={isDeclineModelOpen}
                opencloseDeclineRetailerModal={opencloseDeclineRetailerModal}
            />
            <div className="content_area">
                <div className="card-empty">
                    <div className="card-empty_body">
                        <div className="image mb-5">
                            <picture>
                                <img src={ProductCartEmpty} alt="" />
                            </picture>
                        </div>
                        <h3>
                            You currently have no requests for access from any
                            retailer.
                        </h3>
                        <p>
                            Invite your retailers to join ShopDot so they can
                            start selling your products on their website.
                        </p>
                        <div>
                            <button
                                className="button me-2"
                                onClick={() => opencloseRetailerModal()}
                            >
                                Invite Retailers
                            </button>
                            <button
                                className="button dark"
                                onClick={() => console.log('Clicked')}
                            >
                                View Requests for Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoDataComponent;
