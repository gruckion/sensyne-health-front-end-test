import { useRef } from "react";

export const useCountRenders = () => {
    const renders = useRef(0);
    return renders.current++;
}