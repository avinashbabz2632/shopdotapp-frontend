import React, { useCallback, useState } from 'react';
import ProductCartEmpty from '../../images/product-card-empty.svg';
import InviteRetailer from '../../common/components/InviteRetailerHeaderModal';
import DeclineRetailerModel from '../../common/components/DeclineRetailerModel';
import {useNavigate} from 'react-router-dom';

function NoDataComponent(props) {
  const navigate = useNavigate();
  const { fromAssignedUnassignedPage = false, setShowInviteRetailerModal } = props;
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
              {fromAssignedUnassignedPage
                ? `You currently have no connected retailers.`
                : `You currently have no requests for access from any etailer.`}
            </h3>
            <p>
              {fromAssignedUnassignedPage
                ? `Invite your retailers to join ShopDot or approve connect requests and allow them access to your product so they can start selling your products.`
                : `Invite your retailers to join ShopDot so they can
                            start selling your products on their website.`}
            </p>
            <div>
              <button
                className="button me-2"
                onClick={() => {
                  if(fromAssignedUnassignedPage) {
                    setShowInviteRetailerModal && setShowInviteRetailerModal();
                  } else {
                    opencloseRetailerModal();
                  }
                }}
              >
                Invite Retailers
              </button>
              <button
                className="button dark"
                onClick={() => {
                  navigate && navigate('/brand/request-access');
                }}
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
