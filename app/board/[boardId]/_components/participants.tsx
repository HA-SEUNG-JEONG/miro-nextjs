
import React from "react";

export const Participants = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            List of Users
        </div>
    );
};

Participants.Skeleton = function ParticipantsSkeleton() {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    );
};
