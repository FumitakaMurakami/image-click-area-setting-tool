interface ClickEvent {
    index: number;
    event: string;
}
export type ClickEventType = ClickEvent[];
type HandleClickFunction = (event: string) => void;
export declare const createClickAreas: (rows: number, cols: number, container: HTMLElement, eventItems: ClickEventType, callback: HandleClickFunction, debug?: boolean) => void;
export {};
