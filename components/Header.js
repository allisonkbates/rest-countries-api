import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 22px;
  margin: 0;
  border-bottom: 1px solid var(--lightGray); /* fix me to be a nice drop shadow */
  background-color: var(--white);
  @media only screen and (min-width: 768px) {
    padding: 0px 80px;
  }
  h1 {
    margin: 0;
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin: 0;
    padding-left: 8px;
    font-size: 10px;
    @media only screen and (min-width: 768px) {
      font-size: 12px;
    }
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