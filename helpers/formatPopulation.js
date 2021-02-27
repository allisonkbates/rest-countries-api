function formatPopulation(population) {
  return population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export { formatPopulation };