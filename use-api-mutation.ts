import { useMutation } from "convex/react";
import { FunctionReference } from "convex/server";
import { useState } from "react";

interface MutationProps {
    orgId: string;
    title: string;
}

export const useApiMutation = (
    mutationFunction: FunctionReference<"mutation">
) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = (payload: MutationProps) => {
        setPending(true);
        return apiMutation(payload)
            .finally(() => setPending(false))
            .then((result) => {
                return result;
            })
            .catch((err) => {
                throw err;
            });
    };

    return {
        mutate,
        pending
    };
};
