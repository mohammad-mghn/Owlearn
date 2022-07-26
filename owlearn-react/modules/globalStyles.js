import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --background: ${({ theme }) => theme.background};
        --gradientPinkToPurple:${({ theme }) => theme.gradientPinkToPurple};
        --h1Color:${({ theme }) => theme.h1Color};
        --h2Color:${({ theme }) => theme.h2Color};
        --linkColor:${({ theme }) => theme.linkColor};
        --boxShadow:${({ theme }) => theme.boxShadow};
        --purpleGradient:${({ theme }) => theme.purpleGradient};
        --gradientPurpleToPink:${({ theme }) => theme.gradientPurpleToPink};
        --pinkGradient:${({ theme }) => theme.pinkGradient};
        --lightBlueGradient:${({ theme }) => theme.lightBlueGradient};
        --purpleLighterGradient:${({ theme }) => theme.purpleLighterGradient};
        --navbarBackground:${({ theme }) => theme.navbarBackground};
        --scrollbarColor:${({ theme }) => theme.scrollbarColor};
        --gradientLightblueToBlue:${({ theme }) =>
          theme.gradientLightblueToBlue};
        --blueGradient:${({ theme }) => theme.blueGradient};
        --borderColor:${({ theme }) => theme.borderColor};
        --gradientRedToOrange:${({ theme }) => theme.gradientRedToOrange};
        --orangeGradient:${({ theme }) => theme.orangeGradient};
        --fadeBackground:${({ theme }) => theme.fadeBackground};
        --lightGrey:${({ theme }) => theme.lightGrey};
        --star:${({ theme }) => theme.star};
        --starsBackground:${({ theme }) => theme.starsBackground};
        --lightGrey:${({ theme }) => theme.lightGrey};
        --courseButtonColor:${({ theme }) => theme.courseButtonColor};
        --greyBackground:${({ theme }) => theme.greyBackground};
        --gradientOpacity:${({ theme }) => theme.gradientOpacity};
        --redGradient:${({ theme }) => theme.redGradient};
    }
`;
