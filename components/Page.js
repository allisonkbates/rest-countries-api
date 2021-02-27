import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';

const InnerStyles = styled.div`
	margin: 0 auto;
	padding: 72px 40px;
  background-color: var(--veryLightGray)
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
			<InnerStyles>
				{children}
			</InnerStyles>
    </div>
  )
}