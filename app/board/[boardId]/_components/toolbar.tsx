import {
    Circle,
    MousePointer2,
    Pencil,
    Redo2,
    Square,
    StickyNote,
    Type,
    Undo2
} from "lucide-react";
import { ToolButton } from "./tool-button";

export const Toolbar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton
                    label="Text"
                    icon={Type}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton
                    label="Sticky note"
                    icon={StickyNote}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton
                    label="Rectangle"
                    icon={Square}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton
                    label="Ellipse"
                    icon={Circle}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton
                    label="Pen"
                    icon={Pencil}
                    onClick={() => {}}
                    isActive={false}
                />
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton
                    label="Undo"
                    icon={Undo2}
                    onClick={() => {}}
                    isDisabled={true}
                />
                <ToolButton
                    label="Redo"
                    icon={Redo2}
                    onClick={() => {}}
                    isDisabled={true}
                />
            </div>
        </div>
    );
};

export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    );
};

export default Toolbar;
