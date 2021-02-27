function getNames(array) {
  return (
    array
      .map(item => item.name)
      .join(', ')
  )
}

export { getNames };