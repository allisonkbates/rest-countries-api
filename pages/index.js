import Countries from "../components/Countries";
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';

export default function Home({data}) {
  console.log(data);
  return (
    <>
      <div>
        <Search></Search>
        <Dropdown></Dropdown>
      </div>
      <Countries data={data}></Countries>
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://restcountries.eu/rest/v2/all`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}