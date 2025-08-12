type ButtonProps = {
    text: string;
    onClickButton: () => void;
}

export const Button = (props: ButtonProps) =>  {
    return (
        <button type="submit" onClick={props.onClickButton}>{props.text}</button>
    );
};
