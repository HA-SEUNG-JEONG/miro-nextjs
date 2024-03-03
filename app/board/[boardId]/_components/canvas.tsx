"use client";

import { Participants } from "./participants";
import { Info } from "./info";
import { Toolbar } from "./toolbar";
import { useSelf } from "@/liveblocks.config";
interface CanvasProps {
    boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
    const info = useSelf((me) => me.info);

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info />
            <Participants.Skeleton />
            <Toolbar.Skeleton />
        </main>
    );
};

export default Canvas;
