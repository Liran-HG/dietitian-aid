
export function timeDiffInMinutes(startTime: Date, endTime: Date) {
    const diffMs = endTime.getTime() - startTime.getTime();
    return Math.round(diffMs / 1000 / 60);
}