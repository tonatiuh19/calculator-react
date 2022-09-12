export interface Button {
    title: string,
    type: string,
    customFunction?: (e: any) => void,
    state?: ButtonState
}

interface ButtonState{
    type: string,
    state?: boolean
}
