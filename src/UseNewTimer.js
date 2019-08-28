import { useEffect, useState } from 'react'
export const useNewTimer = (currentDate) => {
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        const tick = () => {
            setDate(new Date());
        }
        let id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return date;
}