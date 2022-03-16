import { useState } from "react";
import './App.css';

const Trello = () => {

   const [boards, setBoards] = useState([
       {id: 1, title: "Started", items: [{id: 1, title: "React"}, {id: 2, title: "Angular"}, {id: 3, title: "Vue"}]},
       {id: 2, title: "In Proccess", items: []},
       {id: 3, title: "Finish", items: []}
   ])

   let [currentBoard, setCurrentBoard] = useState(null)
   let [currentItem, setCurrentItem] = useState(null)

   const dragStartHandler = (e, board, item) => {
      setCurrentBoard(board)
      setCurrentItem(item)
   }

   const dragOverHandler = (e) => {
       e.preventDefault()
   }

   const dropHandler = (e, board) => {
       let itemIndex = currentBoard.items.indexOF(currentItem);

       currentBoard.items.splice(itemIndex, 1);
       board.items.push(currentItem);

       setBoards(boards.map(b => {
        if(currentBoard.id === b.id) return currentBoard
        if(board.id === b.id) return board      
    }
        )
        )
   }



    return (
       
        <div className="Trello">
          {boards.map(board => 
            <div 
            className="Board"
            onDragOver = {(e) => dragOverHandler(e)}    
            onDrop = {(e) => dropHandler(e, board)}>
            <div className="Board_title">{board.title}</div>
            {board.items.map(el => 
                <div 
                className="Item"
                draggable = {true}
                onDragStart = {(e) => dragStartHandler(e, board, item)}
                onDragOver = {(e) => dragOverHandler(e)}
                >
                {el.title}
                </div>
                )}
            </div>
            )}
        </div>

    )

}

export default Trello