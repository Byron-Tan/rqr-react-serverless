import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const shake = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(8px);
}
100% {
  transform: translateX(0);
}
`;
export const ContentWrapper = styled.div`
  display: flex;
  width: calc(100% - 200px);
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 170px);
  }
  @media only screen and (max-width: 1360px) {
    width: 100%;
  }
  @media only screen and (max-width: 667px) {
    flex-direction: column;
  }
`;

export const TextArea = styled.div`
  width: 450px;
  align-self: center;
  padding-right: 45px;
  margin-left: 100px;
  @media only screen and (max-width: 1440px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 1360px) {
    width: 470px;
    margin-left: 30px;
    padding-right: 30px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
  }
  @media only screen and (max-width: 667px) {
    width: calc(100% - 30px);
    max-width: 480px;
    align-self: flex-start;
    padding-top: 160px;
  }

  h2 {
    font-size: 50px;
    line-height: 70px;
    font-weight: 900;
    margin-bottom: 27px;
    @media only screen and (max-width: 1440px) {
      font-size: 46px;
      line-height: 64px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 42px;
      line-height: 50px;
      margin-bottom: 25px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 36px;
      line-height: 46px;
      margin-bottom: 20px;
    }
  }

  h4 {
    font-size: 25px;
    line-height: 40px;
    font-weight: 400;
    color: ${themeGet("colors.text", "#294859")};
    margin-bottom: 22px;
    @media only screen and (max-width: 1440px) {
      font-size: 22px;
      line-height: 40px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 18px;
      line-height: 30px;
    }
  }

  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 45px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
      margin-bottom: 40px;
    }

    &.highlighted_text {
      margin: 0 0 40px;
      font-size: 14px;
      line-height: 17px;
      color: ${themeGet("colors.heading", "#060F1E")};
      @media only screen and (max-width: 1440px) {
        margin: 0 0 30px;
      }
    }
  }
`;

export const HighlightedText = styled.p`
  display: flex;
  align-items: center;
  max-width: 320px;
  width: 100%;
  min-height: 28px;
  border-radius: 80px;
  padding: 3px 28px 3px 4px;
  background-color: #eff0f0;

  strong {
    display: inline-flex;
    align-items: center;
    min-width: 51px;
    min-height: 20px;
    padding: 3px 11px;
    border-radius: 30px;
    font-size: 10px;
    text-transform: uppercase;
    color: ${themeGet("colors.white", "#ffffff")};
    background-color: ${themeGet("colors.secondary", "#D50032")};
    margin-right: 10px;
  }
`;

export const RegistrationForm = styled.form`
  padding: 50px;
  background-color: ${themeGet("colors.white", "#ffffff")};
  @media only screen and (max-width: 1440px) {
    padding: 50px 45px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 40px 35px;
  }
  @media only screen and (max-width: 991px) {
    padding: 30px 20px;
  }
  @media only screen and (max-width: 667px) {
    max-width: 448px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
  .input {
      @media only screen and (max-width: 1360px) {
        width: calc(100% - 140px);
        padding: 0px 15px;
        font-size: 15px;
        height: 56px;
      }
      @media only screen and (max-width: 991px) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      @media only screen and (max-width: 480px) {
        width: calc(100% - 110px);
        margin-bottom: 10px;
      }
    }
  }
  .text {
      @media only screen and (max-width: 1360px) {
        padding: 10px 15px;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 10px 0;
      }
      &.active {
        border-color: ${themeGet("colors.primary", "#FCF22B")};
        background-color: ${themeGet("colors.primary", "#FCF22B")};
  }

  .radio_group {
    @media only screen and (max-width: 1440px) {
      margin-top: 45px;
    }
    @media only screen and (max-width: 1360px) {
      margin-top: 35px;
    }
    @media only screen and (max-width: 991px) {
      margin-top: 25px;
    }
    @media only screen and (max-width: 480px) {
      flex-direction: column;
      margin: 0;
    }

    label {
      @media only screen and (max-width: 1360px) {
        padding: 10px 15px;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 10px 0;
      }
      &.active {
        border-color: ${themeGet("colors.primary", "#FCF22B")};
        background-color: ${themeGet("colors.primary", "#FCF22B")};
      }

      h4 {
        font-size: 20px;
        font-weight: 600;
        @media only screen and (max-width: 1440px) {
          font-size: 16px;
          margin-bottom: 5px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
        }
      }

      p {
        color: ${themeGet("colors.text", "#294859")};
        font-size: 14px;
        @media only screen and (max-width: 1360px) {
          font-size: 13px;
        }
      }
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  color: ${themeGet("colors.white", "#ffffff")};
  background-color: ${themeGet("colors.secondary", "#D50032")};
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 50px;
  text-transform: uppercase;
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    height: 60px;
    margin-top: 45px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 16px;
    margin-top: 35px;
    height: 56px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 14px;
    margin-top: 25px;
    height: 54px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  img {
    margin-left: 13px;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    background: repeating-linear-gradient(
      -45deg,
      ${themeGet("colors.secondary", "#D50032")},
      ${themeGet("colors.secondary", "#D50032")} 10px,
      ${themeGet("colors.secondaryHover", "#FF282F")} 10px,
      ${themeGet("colors.secondaryHover", "#FF282F")} 20px
    );
    transition: all 0.45s ease;
    @media only screen and (max-width: 1440px) {
      background: repeating-linear-gradient(
        -45deg,
        ${themeGet("colors.secondary", "#D50032")},
        ${themeGet("colors.secondary", "#D50032")} 8px,
        ${themeGet("colors.secondaryHover", "#FF282F")} 8px,
        ${themeGet("colors.secondaryHover", "#FF282F")} 16px
      );
    }
  }

  &:hover {
    &::before {
      left: 0;
      opacity: 0.2;
      visibility: visible;
    }
  }
`;

export const FormArea = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  display: grid;
  width: calc(100% - 450px);
  @media only screen and (max-width: 1360px) {
    width: calc(100% - 500px);
    place-items: center;
    margin: auto;
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% - 380px);
    place-items: center;
    margin: auto;
  }
  @media only screen and (max-width: 667px) {
    width: 100%;
    padding: 70px 0 40px;
    margin: auto;
    place-items: center;
  }

  #charitySlide {
    .glide__slides {
      height: 100vh;
      @media only screen and (max-width: 991px) {
        height: 762px;
      }
      @media only screen and (max-width: 667px) {
        height: 380px;
      }
      .glide__slide {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .glide__controls {
      position: absolute;
      bottom: 100px;
      right: calc(100% + 50px);
      display: flex;
      align-items: center;
      @media only screen and (max-width: 1440px) {
        bottom: 50px;
      }
      @media only screen and (max-width: 1360px) {
        right: calc(100% + 40px);
      }
      @media only screen and (max-width: 667px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: inherit;
        right: auto;
        bottom: -40px;
      }

      div {
        top: 50%
        cursor: pointer;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        min-height: 17px;
        margin-left: 20px;

        &:first-child {
          margin-left: 0;
        }

        > span {
          display: inline-block;
          width: 30px;
          height: 2px;
          border-radius: 4px;
          background-color: ${themeGet("colors.text", "#294859")};
          position: relative;
          transition: all 0.3s ease;

          &::before,
          &::after {
            content: "";
            display: block;
            width: 14px;
            height: 2px;
            border-radius: 4px;
            background-color: ${themeGet("colors.text", "#294859")};
            position: absolute;
            z-index: 1;
            transition: all 0.3s ease;
          }

          &.next_arrow {
            &::before {
              right: 0;
              transform: rotate(42deg);
              transform-origin: top right;
            }
            &::after {
              right: 0;
              transform: rotate(-42deg);
              transform-origin: 14px 7px;
              width: 11px;
            }
          }

          &.prev_arrow {
            &::before {
              left: 0;
              transform: rotate(-42deg);
              transform-origin: top left;
            }
            &::after {
              left: 0;
              transform: rotate(42deg);
              transform-origin: -3px 6px;
              width: 11px;
            }
          }
        }

        &:hover {
          > span {
            width: 100px;
            background-color: ${themeGet("colors.secondary", "#D50032")};
            @media only screen and (max-width: 1440px) {
              width: 70px;
            }

            &::before,
            &::after {
              background-color: ${themeGet("colors.secondary", "#D50032")};
            }
          }
        }
      }
    }
  }
`;

export const InputField = styled.div`
  position: relative;
  margin-top: 15px;

  /* Input field wrapper */
  .field-wrapper {
    position: relative;
  }

  /* If input has icon then these styel */
  &.icon-left,
  &.icon-right {
    .field-wrapper {
      display: flex;
      align-items: center;
      > .input-icon {
        position: absolute;
        top: 0;
        bottom: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 40px;
      }
    }
  }

  /* When icon position in left */
  &.icon-left {
    .field-wrapper {
      > .input-icon {
        left: 0;
        right: auto;
      }
      > input {
        padding-left: 34px;
      }
    }
  }

  /* When icon position in right */
  &.icon-right {
    .field-wrapper {
      > .input-icon {
        left: auto;
        right: 0;
      }
      > input {
        padding-right: 34px;
      }
    }
  }

  /* Label default style */
  label {
    display: block;
    color: ${themeGet("colors.labelColor", "#767676")};
    font-size: ${themeGet("fontSizes.4", "16")}px;
    font-weight: ${themeGet("fontWeights.4", "500")};
    margin-bottom: ${themeGet("space.3", "10")}px;
    transition: 0.2s ease all;
  }

  /* Input and textarea default style */
  textarea,
  input {
    font-size: 16px;
    padding: 11px;
    display: block;
    width: 100%;
    color: ${themeGet("colors.textColor", "#484848")};
    box-shadow: none;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid ${themeGet("colors.inactiveIcon", "#ebebeb")};
    transition: border-color 0.2s ease;
    &:focus {
      outline: none;
      border-color: ${themeGet("colors.primary", "#028489")};
    }
  }

  textarea {
    min-height: 150px;
  }

  /* Input material style */
  &.is-material {
    label {
      position: absolute;
      left: 0;
      top: 10px;
    }

    input,
    textarea {
      border-radius: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      padding-left: 0;
      padding-right: 0;
    }

    textarea {
      min-height: 40px;
      padding-bottom: 0;
    }

    .highlight {
      position: absolute;
      height: 1px;
      top: auto;
      left: 50%;
      bottom: 0;
      width: 0;
      pointer-events: none;
      transition: all 0.2s ease;
    }

    /* If input has icon then these styel */
    &.icon-left,
    &.icon-right {
      .field-wrapper {
        flex-direction: row-reverse;
        > .input-icon {
          width: auto;
        }
        > input {
          flex: 1;
        }
      }
    }

    /* When icon position in left */
    &.icon-left {
      .field-wrapper {
        > input {
          padding-left: 20px;
        }
      }
      label {
        top: -15px;
        font-size: 12px;
      }
    }

    /* When icon position in right */
    &.icon-right {
      .field-wrapper {
        > input {
          padding-right: 20px;
        }
      }
    }

    /* Material input focus style */
    &.is-focus {
      input {
        border-color: ${themeGet("colors.inactiveIcon", "#ebebeb")};
      }

      label {
        top: -16px;
        font-size: 12px;
        color: ${themeGet("colors.textColor", "#484848")};
      }

      .highlight {
        width: 100%;
        height: 2px;
        background-color: ${themeGet("colors.primary", "#028489")};
        left: 0;
      }
    }
  }
`;

const EyeButton = styled.button`
  width: 43px;
  height: 40px;
  border: 0;
  padding: 0;
  margin: 0;
  top: 0;
  right: 0;
  position: absolute;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  > span {
    width: 12px;
    height: 12px;
    display: block;
    border: solid 1px ${themeGet("colors.textColor", "#484848")};
    border-radius: 75% 15%;
    transform: rotate(45deg);
    position: relative;

    &:before {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      left: 3px;
      top: 3px;
      position: absolute;
      border: solid 1px ${themeGet("colors.textColor", "#484848")};
    }
  }

  &.eye-closed {
    > span {
      &:after {
        content: "";
        display: block;
        width: 1px;
        height: 20px;
        left: calc(50% - 1px / 2);
        top: -4px;
        position: absolute;
        background-color: ${themeGet("colors.textColor", "#484848")};
        transform: rotate(-12deg);
      }
    }
  }
`;

export { EyeButton };
