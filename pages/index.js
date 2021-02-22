/* import Products from './compoan' */

import Countries from "../components/Countries";

export default function Home({data}) {
  return (
    <Countries data={data}></Countries>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}