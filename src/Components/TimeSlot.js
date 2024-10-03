import React from 'react';
import EditableCell from './EditableCell';


function TimeSlot({ time, days, slotIndex, handleEdit }) {
  return (
    <tr>
      <td>{time}</td>
      {days.map((subject, dayIndex) => (
        <td key={dayIndex} className={subject ? `bg-${subject.color}` : ''}>
          {subject ? (
            <>
              <EditableCell
                value={subject.name}
                onSave={(newValue) => handleEdit(slotIndex, dayIndex, 'name', newValue)}
              />
              <EditableCell
                value={subject.teacher || ''}
                onSave={(newValue) => handleEdit(slotIndex, dayIndex, 'teacher', newValue)}
              />
            </>
          ) : (
            <div className="empty-slot"></div>
          )}
        </td>
      ))}
    </tr>
  );
}

export default TimeSlot;
