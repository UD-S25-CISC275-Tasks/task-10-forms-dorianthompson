import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const updateAnswer: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setAnswer(event.target.value);
    };
    return (
        <div>
            <Form.Group controlId="userAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
