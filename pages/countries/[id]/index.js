import { formatPopulation } from '../../../helpers/formatPopulation';
import { getNames } from '../../../helpers/getNames';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  border: 1px solid var(--darkGray);
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
`;


export default function Country({ country, countries }) {
  const borders = country.borders;
  const borderCountries = 
  countries
  .filter(country => borders.includes(country.alpha3Code))
      .map(country => <Link href={`/countries/${country.alpha3Code}`} key={country.alpha3Code}><StyledLink>{country.name}</StyledLink></Link>);
  
  return (
    <>
      <Link href="/"><a>Back</a></Link>
      <img src={country.flag} alt={country.name}></img>
      <h1>{country.name}</h1>
      <p><b>Native Name:</b> {country.nativeName}</p>
      <p><b>Population:</b> {formatPopulation(country.population)}</p>
      <p><b>Region:</b> {country.region}</p>
      <p><b>Sub Region:</b> {country.subregion}</p>
      <p><b>Capital:</b> {country.capital}</p>
      <p><b>Top Level Domain:</b> {country.topLevelDomain.join(', ')}</p>
      <p><b>Currencies:</b> {getNames(country.currencies)}</p>
      <p><b>Languages:</b> {getNames(country.languages)}</p>
      <h3>Border Countries:</h3>
      {borderCountries}
    </>  
  )
}

// This function gets called at build time - Thanks Nextjs Docs!
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const countries = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const fetchCountry = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`);
  const country = await fetchCountry.json();
  const fetchCountries = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await fetchCountries.json();

  // Pass post data to the page via props
  return { props: { country, countries } }
}