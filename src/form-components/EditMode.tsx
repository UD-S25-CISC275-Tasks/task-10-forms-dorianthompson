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
            <Form.Group controlId="edit_mode_form">
                <Form.Check
                    type="switch"
                    id="is_edit_mode"
                    label="EditMode?"
                    checked={editMode}
                    onChange={updateEditMode}
                />

                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={name} onChange={updateName} />

                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            </Form.Group>
            {!editMode && `${name} ${isStudent ? "is " : " is not"} a student`}
        </div>
    );
}
