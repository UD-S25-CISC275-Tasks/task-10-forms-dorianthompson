import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    const requestAttempts: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        if (!isNaN(parseInt(event.target.value))) {
            setRequestedAttempts(parseInt(event.target.value));
        } else {
            setRequestedAttempts(0);
        }
    };

    return (
        <div>
            <Form.Group controlId="GiveAttempts">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={requestAttempts}
                />
            </Form.Group>
            Attempts Left: {attempts}
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                name="use"
                disabled={!attempts}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(requestedAttempts);
                }}
                name="gain"
            >
                Gain
            </Button>
        </div>
    );
}
