class DateTime {
    timestampToTime(timestamp: number) {
        return new Date(timestamp * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    timestampToDate(timestamp: number) {
        return new Date(timestamp * 1000).toLocaleString("default", {
            hour12: true,
            month: "short",
            day: "numeric",
            year: "numeric",
        }).replace(",", "")
    }

    timestampToString(timestamp: number) {
        return `${this.timestampToTime(timestamp)}, ${this.timestampToDate(timestamp)}`;
    }
}

export const dateTime = new DateTime();