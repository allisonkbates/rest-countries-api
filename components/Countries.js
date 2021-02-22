import styled from "styled-components";

const CountryStyles = styled.div`
  background-color: white;
  margin: 10px;
  max-width: 265px;
  img {
    height:160px;
    width: 265px;
    object-fit: cover;
    
    
  }
`;

function CountryCard({country}) {
  return (
    <CountryStyles>
      <img src={country.flag} alt={country.name}></img>
      <h1>{country.name}</h1>
      <p><b>Population:</b> {country.population}</p>
      <p><b>Region:</b> {country.region}</p>
      <p><b>Capital:</b> {country.capital}</p>
    </CountryStyles>
  )
}

const CountriesStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  background-color: var(--veryLightGray);
`;

export default function Countries({data}) {
  console.log(data);
  const countries = data.map(country => <CountryCard country={country} key={country.alpha2Code}></CountryCard>)
  return (
    <CountriesStyles>
      {countries}
    </CountriesStyles>
  )
}