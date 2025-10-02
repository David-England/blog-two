const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export function readDate_yyyyMMdd(s: string): Date {
    // s must have the form yyyy-MM-dd.
    return new Date(Date.parse(s));
}

export function formatDate(d: Date): string {
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    return `${day} ${months[month]} ${year}`;
}