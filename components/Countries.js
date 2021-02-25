import styled from "styled-components";

const CountryCardStyles = styled.div`
  background-color: white;
  margin: 10px;
  max-width: 265px;
  color: var(--veryDarkBlueDM);
  box-shadow: 1px 1px 15px var(--lightGray);
  .name__container { /* Fixed height so that long names take up the same amount of space */
    height: 72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  h1 {
    font-size: 22px;
    margin: 0;
    padding: 0px 22px;
    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  p {
    margin: 0;
    padding: 4px 22px;
    font-size: 16px;
    &:last-child {
      padding-bottom: 22px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  img {
    height:160px;
    width: 265px;
    object-fit: cover;
  }
`;

function CountryCard({country}) {
  return (
    <CountryCardStyles>
      <img src={country.flag} alt={country.name}></img>
      <div class="name__container">
        <h1>{country.name}</h1>
      </div>
      <p><b>Population:</b> {country.population}</p>
      <p><b>Region:</b> {country.region}</p>
      <p className="last"><b>Capital:</b> {country.capital}</p>
    </CountryCardStyles>
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