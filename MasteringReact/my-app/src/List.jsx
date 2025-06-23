function List() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];
  //Sorting alphabetically using name
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  //filter object using certain criteria (> 100 calories) - creates a new array
  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  //for every fruit in fruits return list item (map - method will return a new array)
  const listItems = fruits.map(fruit => (
    <li key={fruit.id}>
      {fruit.name}; &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;
