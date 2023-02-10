import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrash,FaUserPlus} from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';
function Home() {
   const history=useNavigate()
  const handleDelete=(id)=>{
    alert(`Are you sure do you want to delete`)
    console.log(Employee.map((item)=>item.id).indexOf(id));//Index of array value
    let index=(Employee.map((item)=>item.id).indexOf(id))
    console.log(index);
    Employee.splice(index,1)
    console.log(Employee)
    history('/')
  }

  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",JSON.stringify(salary));
  }
  return (
    <body>
    <div> 
      <h1 className="text-center mt-3">Employee Management System</h1>
      <p className='p-4'><b>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.</b></p>
      <Link to={'/Add'}>
      <Button className='btn btn-success'>Add <FaUserPlus/></Button>
      </Link>
      
      <Table striped bordered hover style={{margin:"50px",border:"2px solid"}}variant="dark">
    <thead>
      <tr>
      <th>Id</th>
        <th>User Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        Employee && Employee.length>0 ?

        Employee.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.empname}</td>
            <td>{item.age}</td>
            <td>{item.designation}</td>
            <td>{item.salary}</td>
            <td>
              <Link to={'/Edit'}>
              <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}className='btn btn-info'><FaEdit/></Button>
              </Link>
               <Button onClick={()=>handleDelete(item.id)}><FaTrash/></Button></td>
        
           
          </tr>
        )):"No data available"
    }
    </tbody>
  </Table></div>
  </body>
  )
}

export default Home