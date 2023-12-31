import React from "react";
import Button from "../../Common/Button";
import ProjectColumnMore from "../ProjectColumnMore";
import { useNavigate } from "react-router-dom";

interface IDropDownItem {
  workspaceid: number;
  projectid: number;
  to: string;
  name: string;
}

const DropDownItem: React.FC<IDropDownItem> = ({
  name,
  to,
  projectid,
  workspaceid,
}): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-[8px] hover:bg-gray-secondary rounded-md px-xs py-[5px] mr-[30px]">
      <Button title={name} onClick={() => navigate(to)} />
      <ProjectColumnMore projectid={projectid} workspaceid={workspaceid} />
    </div>
  );
};

export default DropDownItem;
