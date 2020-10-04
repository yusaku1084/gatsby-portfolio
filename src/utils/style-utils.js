
import { css } from "styled-components"

export const media = {
  handheld: (...args) => css`
    @media(min-width: 960px){
      ${css(...args)};
    }
  `,
  handheld768: (...args) => css`
    @media(min-width: 768px){
      ${css(...args)};
    }
  `,
  handheldunder767: (...args) => css`
    @media(max-width: 767px){
      ${css(...args)};
    }
  `,
};



