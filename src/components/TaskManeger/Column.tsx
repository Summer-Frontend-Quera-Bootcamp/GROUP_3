import React, { useState } from "react";
import { Column as ColumnType, Task } from "./TaskBoard";
import TaskItem from "./TaskItem";
import { Droppable } from 'react-beautiful-dnd';
import Button from "../Button";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
interface ColumnProps {
  column: ColumnType;
}

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const [tasks, setTasks] = useState<Task[]>(column.tasks);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
    };
    setTasks([...tasks, newTask]);
    column.tasks = tasks;
  };

  return (
    <Droppable droppableId={String(column.id)}>
      {(provided) => (
        <div
          className="flex flex-col items-center space-y-4 bg-gray-200 p-4 rounded gap-s"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="group flex justify-between items-center text-2xl font-bold w-[250px] h-[44px] border-t-2 border-brand-primary shadow-md rounded-2xl pr-s">
            {column.title}
            <div className="group-hover:visible invisible flex flex-row gap-xs pl-xs">
              <Button
                title=""
                disabled={false}
                type="button"
                icon={<BsThreeDots />}
                className="font-iran-yekan flex justify-center "
              ></Button>
              <Button
                title=""
                disabled={false}
                type="button"
                icon={<AiOutlinePlus />}
                onClick={() =>
                  addTask(
                    prompt("Enter task title") || "",
                    prompt("Enter task description") || ""
                  )
                }
                className="font-iran-yekan flex justify-center "
              ></Button>
            </div>
          </h2>
          {tasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
          <Button
            title="ساختن تسک جدید"
            onClick={() =>
              addTask(
                prompt("Enter task title") || "",
                prompt("Enter task description") || ""
              )
            }
            disabled={false}
            type="button"
            icon={<AiOutlinePlus />}
            className="font-iran-yekan flex justify-center text-brand-primary border-2 px-4 p-[8px , 12px , 8px , 12px] rounded-lg w-[250px] h-[40px] hover:bg-[#dedede] "
          ></Button>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
