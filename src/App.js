import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortDes,setSortDes]=useState(false)
  const [buttonTitle,setButtonTitle]=useState('change to descending order')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeToDes =()=>{
    setSortDes(!sortDes)
    setButtonTitle('Change to Ascending Order')
    console.log(sortDes)
  }
    
  

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems}  sortType={sortDes}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeToDes} > {buttonTitle}</Button>
    </div>
  );
}

export default App;
