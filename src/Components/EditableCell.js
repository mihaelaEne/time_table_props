import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



function EditableCell({ value, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleSave = () => {
    setIsEditing(false);
    onSave(newValue);
  };

  return isEditing ? (
    <Form.Control
      type="text"
      value={newValue}
      onChange={(e) => setNewValue(e.target.value)}
      onBlur={handleSave}
    />
  ) : (
    <span onClick={() => setIsEditing(true)}>{value}</span>
  );
}

export default EditableCell;
