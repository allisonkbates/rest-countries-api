import styled from 'styled-components';
import CountryCard from './CountryCard';

const CountriesStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  background-color: var(--veryLightGray);
`;

export default function Countries({data}) {
  const countries = data.map(country => <CountryCard country={country} key={country.alpha3Code}></CountryCard>)
  return (
    <CountriesStyles>
      {countries}
    </CountriesStyles>
  )
}