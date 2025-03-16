import React, { useState } from "react";
import { Form } from "react-bootstrap";

const options = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(options[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            {options.map((option: string) => (
                <Form.Check
                    key={option}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={`color-check-${option}`}
                    label={option}
                    value={option}
                    style={{ backgroundColor: option }}
                    checked={color === option}
                />
            ))}
            You have chosen{" "}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
            .
        </div>
    );
}
