import React,{useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Main from './Main'
// import Blog from './Blog'
import items from './items';

import Menu from './Menu';
import Categories from './Categories';


function App() {
  const allcategory=['all',...new Set(items.map((item)=>item.category))]

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allcategory);
  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(items);
      return;
    }
      const newItem=items.filter((item)=>item.category===category)
      setMenuItems(newItem);

  }
  return (
    <>
    <Main/>
      <Navbar/>
      <Home/>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </>
  )
}

export default App
