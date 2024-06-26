"use client";

import { Participants } from "./participants";
import { Info } from "./info";
import { Toolbar } from "./toolbar";
interface CanvasProps {
    boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar />
        </main>
    );
};

export default Canvas;
