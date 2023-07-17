import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Student = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const [student, setStudent] = useState(null);

  const studentsUrl = "https://testapi.io/api/Marijus/resource/routing";

  const fetchStudent = async () => {
    try {
      const response = await axios.get(`${studentsUrl}/${id}`);
      setStudent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return student ? (
    <>
      <h3>Student id: {id}</h3>
      <h3>{student.name}</h3>
      <button onClick={handleBack}>Go back</button>
    </>
  ) : (
    <p>Is loading...</p>
  );
};

export default Student;
