import React from 'react'

const App = () => {

 const [dragItem, setDragItem] = React.useState();
 const [list, setList] = React.useState([
   "List one",
   "List two",
   "List three",
   "List four",
   "List five"
 ]);


 const handleDrag = (index) => setDragItem(index);

 const handleDragEnter = (e,index) => {
   e.target.style.backgroundColor = "hsl(268, 56%, 60%) ";
   const newList = [...list];
   const item = newList[dragItem];
   newList.splice(dragItem, 1);
   newList.splice(index, 0, item);
   setDragItem(index);
   setList(newList)
 }

 const handleDragLeave = (e) => {
   e.target.style.backgroundColor = "hsl(268, 71%, 12%)"
 }

 const handleDrop = (e) => {
   e.target.style.backgroundColor = "hsl(268, 71%, 12%)"
 }

 
  return (

     
     <div className='App'>
       <h1>Drag n Drop</h1>
       <div className='listbox'>
      <ul className='list'>
        {list && list.map((item, index) => (
          <li
            draggable
            key={index}
            onDragStart={() => handleDrag(index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
          </li>
        ))}
      </ul>

       </div>


    </div>
     
  );
}

export default App;
