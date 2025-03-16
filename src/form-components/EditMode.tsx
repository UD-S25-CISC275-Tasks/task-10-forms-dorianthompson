import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("YOUR NAME");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const updateEditMode: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setEditMode(event.target.checked);
    };

    const updateName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    };

    const updateStudent: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setIsStudent(event.target.checked);
    };
    return (
        <div>
            <Form.Check
                type="switch"
                id="is_edit_mode"
                label="EditMode?"
                onChange={updateEditMode}
            />

            {editMode && (
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        checked={editMode}
                        type="text"
                        value={name}
                        onChange={updateName}
                    />
                </Form.Group>
            )}

            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            )}
            {`${name} ${isStudent ? "is " : "is not "}a student`}
        </div>
    );
}
