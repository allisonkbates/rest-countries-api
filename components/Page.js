import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --darkBlue: hsl(209, 23%, 22%);
    --veryDarkBlueDM: hsl(207, 26%, 17%);
    --veryDarkBlueLM: hsl(200, 15%, 8%);
    --darkGray: hsl(0, 0%, 52%);
    --veryLightGray: hsl(0, 0%, 98%);
    --lightGray: #ededed;
    --white: hsl(0, 0%, 100%);
    --maxWidth: 1000px;
    
  }
  h1 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
  }
`;

const InnerStyles = styled.div`
	max-width: var(--max - width);
	margin: 0 auto;
	padding: 0;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header></Header>
			<InnerStyles>
				{children}
			</InnerStyles>
    </div>
  )
}