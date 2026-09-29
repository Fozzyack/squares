"use client";

import { getBackendUrl } from "@/utils/env";
import { getTodayKey } from "@/utils/date";
import { useRouter } from "next/navigation";
import { useState } from "react";

type HabitRecordButtonProps = {
    habitId: string;
    todayCount: number;
    increment: number;
    unit: string | null;
    color: string | null;
};

export function HabitRecordButton({
    habitId,
    todayCount,
    increment,
    unit,
    color,
}: HabitRecordButtonProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const suffix = unit ? ` ${unit}` : "";
    const hasCustomColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(
        color ?? "",
    );

    const [isUndoing, setIsUndoing] = useState(false);

    const handleRecord = async (undo = false) => {
        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setIsUndoing(undo);
        setErrorMsg("");
        const date = getTodayKey();

        try {
            const response = await fetch(
                `${getBackendUrl()}/habits/${habitId}/record?date=${date}`,
                {
                    method: undo ? "DELETE" : "POST",
                    credentials: "include",
                    ...(undo
                        ? {}
                        : {
                              headers: {
                                  "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                  amount: increment,
                                  date,
                              }),
                          }),
                },
            );

            if (!response.ok) {
                const data = await response.json().catch(() => null);
                setErrorMsg(
                    data?.error ??
                        (undo
                            ? "Could not undo progress"
                            : "Could not record progress"),
                );
                return;
            }

            router.refresh();
        } catch {
            setErrorMsg("Could not reach server");
        } finally {
            setIsSubmitting(false);
            setIsUndoing(false);
        }
    };

    return (
        <div className="flex flex-col items-end gap-1">
            <div className="flex gap-2">
                {todayCount > 0 ? (
                    <button
                        type="button"
                        onClick={() => handleRecord(true)}
                        disabled={isSubmitting}
                        className="rounded-md border border-card-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-muted disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {isUndoing ? "Undoing..." : "Undo"}
                    </button>
                ) : null}
                <button
                    type="button"
                    onClick={() => handleRecord()}
                    disabled={isSubmitting}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 hover:cursor-pointer ${hasCustomColor ? "" : "bg-primary"}`}
                    style={
                        hasCustomColor
                            ? { backgroundColor: color ?? undefined }
                            : undefined
                    }
                >
                    {isSubmitting
                        ? isUndoing
                            ? "Undoing..."
                            : "Saving..."
                        : `+${increment}${suffix}`}
                </button>
            </div>
            {errorMsg ? (
                <p className="text-[11px] text-danger-foreground" role="alert">
                    {errorMsg}
                </p>
            ) : null}
        </div>
    );
}
