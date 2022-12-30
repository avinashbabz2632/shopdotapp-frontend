import styled from 'styled-components';
import {
    orange100,
    inputTransitionSpeed,
    inputBackground,
    inuputHeight,
    inputPadding,
    inputBorderRadius,
    inputBorderColor,
    inputFonstSize,
    inputFontFamily,
    inputColor,
    inputFocusBorderColor,
    inputFocusBackgroundColor,
    inputValidBorderColor,
    inputValidBackgroundColor,
} from '../../../theme/variables';

const Input = styled.input`
    // display: flex;
    // align-items: center;
    // align-content: center;
    // z-index: 0;
    // -webkit-appearance: none;
    // appearance: none;
    // width: 100%;
    // box-sizing: border-box;
    // font-family: ${inputFontFamily};
    // font-size: ${inputFonstSize};
    // font-weight: 400;
    // border: 0.1rem solid ${inputBorderColor};
    // border-radius: ${inputBorderRadius};
    // padding: ${inputPadding};
    // height: ${inuputHeight};
    // outline: none;
    // background-color: ${inputBackground};
    // transition: all ${inputTransitionSpeed} ease;
    // caret-color: ${orange100};
    //
    // &::place-holder {
    //     color: ${inputColor};
    //     opacity: 0.64;
    // }
    //
    // &.invalid {
    //     border-color: ${inputFocusBorderColor};
    //     background-color: ${inputFocusBackgroundColor};
    // }
    //
    // &:focus {
    //     border-color: ${inputFocusBorderColor};
    //     background-color: ${inputFocusBackgroundColor};
    // }
    //
    // &:focus:required:invalid {
    //     border-color: ${inputFocusBorderColor};
    //     background-color: ${inputFocusBackgroundColor};
    // }
    //
    // &:required:valid {
    //     border-color: var(--orange-tint-10);
    //     background-color: var(--white);
    // }
    //
    // &.valid {
    //     border-color: ${inputValidBorderColor};
    //     background-color: ${inputValidBackgroundColor};
    // }

    background: #fffcf9;
    border: 1px solid #f3e0d2;
    border-radius: 4px;
    height: 4rem;
    padding: 1rem 1.2rem;
    display: block;
    width: 100%;
    margin-top: 0.6rem;
    appearance: none;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    outline: none;

    &.invalid {
        border-color: #eb5757;
    }
`;

export default Input;
