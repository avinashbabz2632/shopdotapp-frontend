import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductUrl from '../../images/pc-slider-temp.jfif';
import closeIcon from '../../images/icons/close-icon.svg';
import LeftArrow from '../../images/icons/icon-arrow--left  white.svg';
import RightArrow from '../../images/icons/icon-arrow--right -white.svg';
import '../../Style/brand.style.scss';
import '../../Style/brand.media.scss';
import '../../Style/brand.dev.scss';
import { map } from 'lodash';

export default function ProductZoomModal(props) {
  const { handalModal, productImages } = props;
  const [swipedImage, setSwipedImage] = useState(1);

  const handalSwipeRightImage = () => {
    setSwipedImage(swipedImage + 1);
  };

  const handalSwipeLeftImage = () => {
    setSwipedImage(swipedImage - 1);
  };

  return (
    <div className="products_popups">
      <div className="popup popup-product-gallery active" id="pg1">
        <div className="popup_wrapper">
          <div className="popup_content">
            <div className="popup-close" onClick={() => handalModal()}>
              <img className="icon" src={closeIcon} />
            </div>

            <div className="swiper-container gallery-main swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className={`swiper-wrapper ${
                  swipedImage === 2 ? 'swiper-second' : 'swiper-first'
                } ${swipedImage === 3 && 'swiper-third'}`}
                id="swiper-wrapper-9a3741016670105a3b"
                aria-live="polite"
              >
                {map(productImages, (img, key) => {
                  return (
                    <div
                      className={`swiper-slide ${
                        swipedImage === 1 &&
                        'swiper-slide-visible swiper-slide-active'
                      } ${swipedImage === 2 && 'swiper-slide-prev'}`}
                      role="group"
                      aria-label="1 / 3"
                    >
                      <div className="image">
                        <picture>
                          <img src={img.src} alt="" />
                        </picture>
                      </div>
                      <div className="product-snack active">
                        Summer - A little box of summer activity ideas for kids
                        1
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`swiper-button-prev ${
                  swipedImage === 1 && 'swiper-button-disabled'
                }`}
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-9a3741016670105a3b"
                aria-disabled={swipedImage === 1}
                onClick={() => handalSwipeLeftImage()}
              >
                <img className="icon-left-right " src={LeftArrow} />
              </div>
              <div
                className={`swiper-button-next ${
                  swipedImage === 3 && 'swiper-button-disabled'
                }`}
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-9a3741016670105a3b"
                aria-disabled={swipedImage === 3}
                onClick={() => handalSwipeRightImage()}
              >
                <img className="icon-left-right" src={RightArrow} />
              </div>

              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductZoomModal.propTypes = {
  handalModal: PropTypes.fun,
};
