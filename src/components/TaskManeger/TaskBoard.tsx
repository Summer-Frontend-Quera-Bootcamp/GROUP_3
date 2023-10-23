import React, { useState } from "react";
import Column from "./Column";
import { DragDropContext } from 'react-beautiful-dnd';
import Button from "../Button";
import { AiOutlinePlus } from "react-icons/ai";
// Install (npm install react-beautiful-dnd @types/react-beautiful-dnd)

export interface Task {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export interface Column {
  id: number;
  title: string;
  tasks: Task[];
}

export const TaskBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const addColumn = (title: string) => {
    const newColumn: Column = {
      id: columns.length + 1,
      title,
      tasks: [],
    };
    setColumns([...columns, newColumn]);
  };

  const handleOnDragEnd = (result:any) => {
    if (!result.destination) return; // Return if dropped outside a droppable
  
    const { source, destination } = result;
  
    // Find source and destination columns
    const sourceColumn = columns.find(column => column.id === source.droppableId);
    const destColumn = columns.find(column => column.id === destination.droppableId);
  
    // Check if source and destination columns exist
    if (!sourceColumn || !destColumn) return;
  
    // Remove task from source column
    const [removed] = sourceColumn.tasks.splice(source.index, 1);
  
    // Add task to destination column
    destColumn.tasks.splice(destination.index, 0, removed);
  
    setColumns([...columns]);
  };
  

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex flex-row items-start space-y-4 ">
        <div className="flex-shrink-0 items-center w-[250px] h-[44px] shadow-md rounded-2xl pr-s mx-s">
          <Button
            title="ساختن برد جدید"
            onClick={() => addColumn(prompt("Enter column title") || "")}
            disabled={false}
            type="button"
            icon={<AiOutlinePlus />}
            className=" font-iran-yekan text-2xl font-medium w-[250px] h-[44px]"
          ></Button>
        </div>

        <div className="flex space-x-4 gap-x-m">
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};
export default TaskBoard;
