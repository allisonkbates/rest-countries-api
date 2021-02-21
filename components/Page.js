import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --darkBlue: hsl(209, 23%, 22%);
    --veryDarkBlueDM: hsl(207, 26%, 17%);
    --veryDarkBlueLM: hsl(200, 15%, 8%);
    --darkGray: hsl(0, 0%, 52%);
    --veryLightGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
    --homepageFont: 14px;
    --detailPageFont: 16px;
  }
  h1 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  )
}