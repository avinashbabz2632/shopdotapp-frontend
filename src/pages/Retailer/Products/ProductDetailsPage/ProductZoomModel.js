import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductUrl from '../../../../assets/first_img.jpeg';
import FirstImg from '../../../../assets/first_img.jpeg';
import SecondImg from '../../../../assets/second_img.jpeg';
import ThirdImg from '../../../../assets/third_img.jpeg';
import FourImg from '../../../../assets/fourth_img.jpeg';
import FiveImg from '../../../../assets/fifth_img.webp';
import SixImg from '../../../../assets/sixth_img.webp';
import SevenImg from '../../../../assets/seventh_img.webp';
import EightImg from '../../../../assets/eighth_img.webp';
import NineImg from '../../../../assets/nineth_img.webp';
import TenImg from '../../../../assets/tenth_img.webp';
import ElevenImg from '../../../../assets/eleventh_img.webp';
import closeIcon from '../../../Brand/images/icons/close-icon.svg';
import LeftArrow from '../../../Brand/images/icons/icon-arrow-black.svg';
import RightArrow from '../../../Brand/images/icons/icon-arrow-right-black.svg';

export default function ProductZoomModal(props) {
  const { handalModal, productImages } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  const handalSwipeRightImage = () => {
    setSlideIndex((prev) => (prev + 1) % 11);
  };
  const handalSwipeLeftImage = () => {
    setSlideIndex((prev) => (prev - 1) % 11);
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
                className="swiper-wrapper"
                id="swiper-wrapper-b10be92488cd746ab"
                aria-live="polite"
                style={{
                  transform: `translate3d(-${100 * slideIndex}%, 0px, 0px)`,
                  transitionDuration: '1000ms',
                }}
              >
                {productImages &&
                  productImages.map((image, index) => {
                    return (
                      <div
                        className="swiper-slide"
                        role="group"
                        aria-label="1 / 11"
                      >
                        <div className="image">
                          <picture>
                            <img src={image.src} alt="" />
                          </picture>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div
                className={`swiper-button-prev ${
                  slideIndex === 0 && 'swiper-button-disabled'
                }`}
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-9a3741016670105a3b"
                aria-disabled={slideIndex === 0}
                onClick={() => handalSwipeLeftImage()}
              >
                <img className="icon-left-right" src={LeftArrow} />
              </div>
              <div
                className={`swiper-button-next ${
                  slideIndex === productImages?.length - 1 && 'swiper-button-disabled'
                }`}
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-9a3741016670105a3b"
                aria-disabled={slideIndex === productImages?.length - 1}
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
  handalModal: PropTypes.func,
};
