import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --h1Color:${({ theme }) => theme.h1Color};
        --h2Color:${({ theme }) => theme.h2Color};
        --linkColor:${({ theme }) => theme.linkColor};
        --boxShadow:${({ theme }) => theme.boxShadow};
        --lightGrey:${({ theme }) => theme.lightGrey};
        --background: ${({ theme }) => theme.background};
        --borderColor:${({ theme }) => theme.borderColor};
        --inputShadow:${({ theme }) => theme.inputShadow};
        --greyBackground:${({ theme }) => theme.greyBackground};
        --fadeBackground:${({ theme }) => theme.fadeBackground};
        --GradientOpacity:${({ theme }) => theme.GradientOpacity};
        --gradientOpacity:${({ theme }) => theme.gradientOpacity};
        --starsBackground:${({ theme }) => theme.starsBackground};
        --navbarBackground:${({ theme }) => theme.navbarBackground};
        --courseButtonColor:${({ theme }) => theme.courseButtonColor};
    }
`;
