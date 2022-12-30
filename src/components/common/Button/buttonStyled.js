import { css } from 'styled-components';
import {
    orange100,
    white,
    navy,
    orangeTint2,
    orangeShade100,
} from '../../../theme/variables';

const buttonStyles = css`
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Mulish', sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    border-radius: 0.333em;
    font-size: 1.8rem;
    color: ${white};
    position: relative;
    transition: all 0.3s ease;
    border: 0.2rem solid ${orangeShade100};
    font-weight: 700;
    padding: 1.3rem 3rem;

    line-height: 1.15;
    height: 48px;
    min-width: 103px;

    &:focus {
        outline: none;
        box-shadow: none;
    }
    &:hover {
        text-decoration: none;
        color: ${orangeShade100};
        background-color: ${white};
        border: 0.2rem solid ${orangeShade100};
    }
    // &:active {
    //     background-color: ${orange100};
    // }
    &.loading {
        opacity: 0.7;
        text-indent: -9999px;

        &.btn-sm {
            min-width: 105px;
        }
    }

    &.button-navy {
        background-color: ${navy};
        color: ${white};
    }

    &.button-primary {
        background-color: ${orange100};
        color: ${white};
    }

    &.button-light {
        background-color: ${orangeTint2};
        color: ${navy};
    }

    &.btn-sm {
        font-size: 14px;
        line-height: 16px;
        min-width: auto;
        padding: 10px 20px;
        height: auto;
    }

    &:disabled,
    &:hover:disabled {
        box-shadow: none;
        background: rgba(189, 111, 52, 0.3);
        border: 1px solid rgba(189, 111, 52, 0.3);
        cursor: not-allowed;
    }
`;

buttonStyles.displayName = 'buttonStyle';

export default buttonStyles;
