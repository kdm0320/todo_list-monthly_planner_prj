import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "../CSS/CardCss";

interface IDragabbleCardProps {
  toDoID: number;
  toDoText: string;
  index: number;
}

function DragabbleCard({ toDoID, toDoText, index }: IDragabbleCardProps) {
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
