import { useState } from 'react';
import Trello from './Trello';
import './App.css';



const App = ()=>{

  // const [boards, setBoards] = useState([
  //   {id: 1, title: 'STARTED', items:[{id: 1, title: 'React'}, {id: 2, title: 'Angular'}, {id: 3, title:'Vue'}]},
  //   {id: 2, title: 'IN PROCESS', items:[]},
  //   {id: 3, title: 'FINISHED', items:[]}
  // ]);

  // const [currentBoard, setCurrentBoard] = useState(null);
  // const [currentItem, setCurrentItem] = useState(null);


  // const dragOverHandler = (e)=>{
  //   e.preventDefault();
  // }

  // const dropHandler = (e, board)=>{

  //   const currentIndex = currentBoard.items.indexOf(currentItem); // 'STARTED'
  //   currentBoard.items.splice(currentIndex, 1);

  //   board.items.push(currentItem); // 'IS PROCESS'

  //   setBoards(boards.map(b=>{
  //     if(b.id === currentBoard.id) return currentBoard;
  //     if(b.id === board.id) return board;
  //     return b;
  //   }));    

  // }

  // const dragStartHandler = (e, board, item)=>{
  //   setCurrentBoard(board);
  //   setCurrentItem(item);
  // }

  
  return (
    
    <Trello/>
    //     <div className='App'>
         
    //      {
    //       boards.map(board=> 
    //         <div 
    //           className='Board'
    //           onDragOver={e=> dragOverHandler(e)}
    //           onDrop={e=> dropHandler(e, board)}
    //         >

    //           <div className='Board_Title'>{board.title}</div>
    //           {board.items.map(el=>
    //             <div 
    //               className='Item' 
    //               draggable={true}
    //               onDragOver={e=> dragOverHandler(e)}
    //               onDragStart={e=> dragStartHandler(e, board, el)}
                 
    //             >
    //               {el.title}
    //             </div>
    //           )}

            
    //         </div>
    //       )
    //     }
    // </div> 
   );
  }
 

export default App;