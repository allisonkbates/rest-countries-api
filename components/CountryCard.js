import styled from 'styled-components';
import Link from 'next/link';
import { formatPopulation } from '../helpers/formatPopulation';


const CountryCardStyles = styled.div`
  background-color: white;
  margin: 20px;
  padding: 0;
  max-width: 330px;
  margin-bottom: 72px;
  color: var(--veryDarkBlueDM);
  box-shadow: var(--boxShadow);
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    max-width: 265px;
  }
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
    height:200px;
    width: 330px;
    object-fit: cover;
    @media only screen and (min-width: 768px) {
      height:160px;
      width: 265px;
  }
  }
`;

export default function CountryCard({ country }) {
  const formattedPopulation = formatPopulation(country.population);

  return (

    <Link href={`/countries/${country.alpha3Code}`}>
      <CountryCardStyles>
        <img src={country.flag} alt={country.name}></img>
        <div className="name__container">
          <h1>{country.name}</h1>
        </div>
        <p><b>Population:</b> {formattedPopulation}</p>
        <p><b>Region:</b> {country.region}</p>
        <p className="last"><b>Capital:</b> {country.capital}</p>
      </CountryCardStyles>
    </Link>
  )
}