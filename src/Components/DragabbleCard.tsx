import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
import { Card } from "../CSS/CardCss";

interface IDragabbleCardProps {
  toDoID: number;
  toDoText: string;
  index: number;
  boardID: string;
}

function DragabbleCard({
  toDoID,
  toDoText,
  index,
  boardID,
}: IDragabbleCardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const deleteCard = () => {
    setToDos((allBoards) => {
      const temp: IToDo[] = [];
      const boardCopy = [...allBoards[boardID]];
      boardCopy.filter((todo) => {
        if (todo.id !== toDoID) {
          temp.push(todo);
        }
      });
      return {
        ...allBoards,
        [boardID]: temp,
      };
    });
  };
  return (
    <Draggable draggableId={toDoID + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
