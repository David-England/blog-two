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

export function formatDate(d: Date): string {
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    return `${day} ${months[month]} ${year}`;
}