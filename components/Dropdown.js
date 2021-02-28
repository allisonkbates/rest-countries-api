import { useSelect } from 'downshift';

const items = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

const menuStyles = { /* Placeholder */
  maxHeight: 80,
  maxWidth: 300,
  overflowY: 'scroll',
  backgroundColor: '#eee',
  padding: 0,
  listStyle: 'none',
  position: 'relative',
}


export default function Dropdown({ selectedItem, handleSelectedItemChange }) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem,
    onSelectedItemChange: handleSelectedItemChange, 
  });
  return (
    <div>
      <label {...getLabelProps()}>Choose Region:</label>
      <button type="button" {...getToggleButtonProps()}>{selectedItem || 'Region'}</button>
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen && 
          items.map((item, index) => (
            <li style={highlightedIndex === index ? { backgroundColor: '#bde4ff'} : {}} key={`${item}${index}`} {...getItemProps({item, index})}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  )
}