"use client";

import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewButtonProps {
    orgId: string;
    disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewButtonProps) => {
    const create = useMutation(api.board.create);
    const onClick = () => {
        create({
            orgId,
            title: "New Board"
        })
            .then((id) => {
                toast.success("board created");
            })
            .catch(() => toast.error("Board creation failed"));
    };

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                disabled && "opacity-75 hover:bg-blue-500 cursor-not-allowed"
            )}
        >
            <div />
            <Plus className="h-12 w-12 text-white stroke-1" />
            <p className="text-xs text-white font-light">New Boards</p>
        </button>
    );
};

export default NewBoardButton;
