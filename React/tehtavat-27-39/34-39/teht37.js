import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Redux slice for managing students and courses
const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    courses: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

const { addStudent, removeStudent, addCourse } = studentSlice.actions;
const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
});

// StudentForm component
const StudentForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && name && year) {
      dispatch(addStudent({ id, name, year }));
      setId('');
      setName('');
      setYear('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Id
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Nimi
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Aloitusvuosi
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <Opintojakso />
      <button type="submit">Lisää</button>
    </form>
  );
};

// StudentList component
const StudentList = () => {
  const students = useSelector((state) => state.students.students);

  return (
    <table border="1">
      <thead>
        <tr>
          <td>Nr</td>
          <td>Name</td>
          <td>Starting year</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <TableRow key={student.id} id={student.id} nimi={student.name} aloitusvuosi={student.year} />
        ))}
      </tbody>
    </table>
  );
};

// TableRow component
const TableRow = ({ id, nimi, aloitusvuosi }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{id}</td>
      <td>{nimi}</td>
      <td>{aloitusvuosi}</td>
      <td>
        <button onClick={() => dispatch(removeStudent(id))}>Poista {id}</button>
      </td>
    </tr>
  );
};

// Opintojakso component
const Opintojakso = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.students.courses);
  const [oid, setOid] = useState('');
  const [onimi, setOnimi] = useState('');
  const [olaajuus, setOlaajuus] = useState('');

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (oid && onimi && olaajuus) {
      dispatch(addCourse({ id: oid, name: onimi, credits: olaajuus }));
      setOid('');
      setOnimi('');
      setOlaajuus('');
    }
  };

  return (
    <div>
      <h3>Opintojaksot</h3>
      <form onSubmit={handleAddCourse}>
        <label>
          Oid
          <input type="text" value={oid} onChange={(e) => setOid(e.target.value)} />
        </label>
        <label>
          Onimi
          <input type="text" value={onimi} onChange={(e) => setOnimi(e.target.value)} />
        </label>
        <label>
          Olaajuus
          <input type="text" value={olaajuus} onChange={(e) => setOlaajuus(e.target.value)} />
        </label>
        <button type="submit">Lisää jakso</button>
      </form>
      <select>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name},{course.credits}
          </option>
        ))}
      </select>
    </div>
  );
};

// Teht37 component
const Teht37 = () => {
  return (
    <Provider store={store}>
      <StudentForm />
      <StudentList />
    </Provider>
  );
};

export { Teht37, store, TableRow };