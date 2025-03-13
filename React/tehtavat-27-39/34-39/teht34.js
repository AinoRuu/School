import React, { createContext, useContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const addStudent = (student) => {
        setStudents((prev) => [...prev, student]);
    };

    const removeStudent = (id) => {
        setStudents((prev) => prev.filter(student => student.id !== id));
    };

    const addCourse = (course) => {
        setCourses((prev) => [...prev, course])
    }

    return (
        <StudentContext.Provider value={{ students, addStudent, removeStudent, courses, addCourse }}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudentContext = () => useContext(StudentContext);



export const StudentForm = () => {
    const { addStudent } = useStudentContext();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id && name && year) {
            addStudent({ id, name, year });
            setId("");
            setName("");
            setYear("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Id
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} ></input>
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

export const StudentList = () => {
    const { students } = useStudentContext();

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
                {students.map((student, index) => (
                    <TableRow key={student.id} id={student.id} nimi={student.name} aloitusvuosi={student.year} />
                ))}
            </tbody>
        </table>
    );
};

export const TableRow = ({ id, nimi, aloitusvuosi }) => {

    const { removeStudent } = useStudentContext();

    return (
        <tr>
            <td>{id}</td>
            <td>{nimi}</td>
            <td>{aloitusvuosi}</td>
            <td><button onClick={() => removeStudent(id)}>Poista {id}</button></td>
        </tr>
    )
}
export const Opintojakso = () => {
    const { courses, addCourse } = useStudentContext();
    const [oid, setOid] = useState("");
    const [onimi, setOnimi] = useState("");
    const [olaajuus, setOlaajuus] = useState("");

    const handleAddCourse = (e) => {
        e.preventDefault();
        if (oid && onimi && olaajuus) {
            addCourse({ id: oid, name: onimi, credits: olaajuus });
            setOid("");
            setOnimi("");
            setOlaajuus("");
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
                    <option key={course.id} value={course.id}>{course.name},{course.credits}</option>
                ))}
            </select>
        </div>
    );
};

const Teht34 = () => {
    return (
        <StudentProvider>
            <StudentForm />
            <StudentList />
        </StudentProvider>
    );

};

export { Teht34 };