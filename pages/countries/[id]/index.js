import { formatPopulation } from '../../../helpers/formatPopulation';
import { getNames } from '../../../helpers/getNames';
import Link from 'next/link';

export default function Country({ country }) {
  console.log(country.borders);
  const borders = country.borders.map(border => <Link href={`/countries/${border}`}>{border}</Link>)
  return (
    <>
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
      {borders}
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
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`)
  const country = await res.json()

  // Pass post data to the page via props
  return { props: { country } }
}