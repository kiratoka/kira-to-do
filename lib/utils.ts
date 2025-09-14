export const formatDateToIndonesian = (date: Date): string => {
    const dateOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    const tanggal = new Intl.DateTimeFormat('id-ID', dateOptions).format(date);
    const jam = new Intl.DateTimeFormat('id-ID', timeOptions).format(date);

    return `${tanggal} | ${jam}`;
};
