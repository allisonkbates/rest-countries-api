import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 16px;
  border-bottom: 1px solid var(--darkGray); /* fix me to be a nice drop shadow */
  background-color: var(--white);
  h1 {
    margin: 0;
    font-size: 16px;
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin: 0;
    padding-left: 8px;
    font-size: 12px;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Where in the world?</h1>
      <div> {/* Turn into its own component when it supports dark mode */}
        <i aria-hidden className="far fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </HeaderStyles>
  )
}