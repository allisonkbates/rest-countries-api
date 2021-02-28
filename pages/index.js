import { useState } from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';

const FILTER_MAP = {
  All: () => true,
  Africa: country => country.region === 'Africa',
  Americas: country => country.region === 'Americas',
  Asia: country => country.region === 'Asia',
  Europe: country => country.region === 'Europe',
  Oceania: country => country.region === 'Oceania'
}

const CountriesStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  background-color: var(--veryLightGray);
`;

export default function Home({ countries }) {
  const [selectedItem, setSelectedItem] = useState('All');
  function handleSelectedItemChange({ selectedItem }) {
    setSelectedItem(selectedItem)
  }
  
  const countriesCards = 
  countries
    .filter(FILTER_MAP[selectedItem])
    .map(country => <CountryCard country={country} key={country.alpha3Code}></CountryCard>)

  return (
    <>
      <div>
        <Search></Search>
        <Dropdown 
          selectedItem={selectedItem}
          handleSelectedItemChange={handleSelectedItemChange} 
        />
      </div>
      <CountriesStyles>
        {countriesCards}
      </CountriesStyles>
    </>  
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const fetchCountries = await fetch(`https://restcountries.eu/rest/v2/all`)
  const countries = await fetchCountries.json()

  // Pass data to the page via props
  return { props: { countries } }
}