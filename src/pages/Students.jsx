import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Students = () => {
  //   const students = [
  //     { name: "John", id: 1 },
  //     { name: "Peter", id: 2 },
  //   ];

  const [students, setStudents] = useState([]);

  const studentsUrl = "https://testapi.io/api/Marijus/resource/routing";

  const fetchStudents = async () => {
    try {
      const response = await axios.get(studentsUrl);
      setStudents(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <h1>Students page</h1>
      {students.map(({ id, name }) => (
        <p key={id}>
          <Link to={`/student/${id}`} key={id}>
            {name}
          </Link>
        </p>
      ))}
    </>
  );
};

export default Students;
