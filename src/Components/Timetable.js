import React, { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import Header from './Header';
import TimeSlot from './TimeSlot';



function Timetable() {
  const [schedule, setSchedule] = useState([
    { time: '9:00am', days: [
        { name: 'Dance', teacher: 'Ivana Wong', color: 'primary' },
        { name: 'Yoga', teacher: 'Marta Healy', color: 'success' },
        { name: 'Music', teacher: 'Ivana Wong', color: 'warning' },
        { name: 'Dance', teacher: 'Ivana Wong', color: 'primary' },
        { name: 'Art', teacher: 'Kate Alley', color: 'purple' },
        { name: 'English', teacher: 'James Smith', color: 'danger' }
    ]},
    { time: '10:00am', days: [
        { name: 'Music', teacher: 'Ivana Wong', color: 'warning' },
        null,
        { name: 'Art', teacher: 'Kate Alley', color: 'purple' },
        { name: 'Yoga', teacher: 'Marta Healy', color: 'success' },
        { name: 'English', teacher: 'James Smith', color: 'danger' },
        null
    ]},
    { time: '11:00am', days: [
        { name: 'Break', color: 'secondary' },
        { name: 'Break', color: 'secondary' },
        { name: 'Break', color: 'secondary' },
        { name: 'Break', color: 'secondary' },
        { name: 'Break', color: 'secondary' },
        { name: 'Break', color: 'secondary' }
    ]},
    { time: '12:00pm', days: [
        null,
        { name: 'Art', teacher: 'Kate Alley', color: 'purple' },
        { name: 'Dance', teacher: 'Ivana Wong', color: 'primary' },
        { name: 'Music', teacher: 'Ivana Wong', color: 'warning' },
        null,
        { name: 'Yoga', teacher: 'Marta Healy', color: 'success' }
    ]},
    { time: '1:00pm', days: [
        { name: 'English', teacher: 'James Smith', color: 'danger' },
        { name: 'Music', teacher: 'Ivana Wong', color: 'warning' },
        null,
        { name: 'English', teacher: 'James Smith', color: 'danger' },
        { name: 'Yoga', teacher: 'Marta Healy', color: 'success' },
        { name: 'Music', teacher: 'Ivana Wong', color: 'warning' }
    ]}
  ]);

  const handleEdit = (timeIndex, dayIndex, key, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[timeIndex].days[dayIndex][key] = value;
    setSchedule(updatedSchedule);
  };

  return (
    <Container>
      <Table bordered hover className="text-center">
        <Header days={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} />
        <tbody>
          {schedule.map((slot, slotIndex) => (
            <TimeSlot
              key={slot.time}
              time={slot.time}
              days={slot.days}
              slotIndex={slotIndex}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Timetable;
