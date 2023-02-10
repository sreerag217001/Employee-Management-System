import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(localStorage.getItem("ID"));
    setEmpname(localStorage.getItem("NAME"));
    setAge(localStorage.getItem("AGE"));
    setDesignation(localStorage.getItem("DESIGNATION"));
    setSalary(JSON.parse(localStorage.getItem("SALARY")));
  },[])

  console.log(id);
  console.log(empname);
  console.log(age);
//index value of array of employees
  var index=Employee.map(item=>item.id).indexOf(id)
  console.log(index);

  let history=useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault()
    console.log(e);
    let emp=Employee[index]
    console.log(emp);

    emp.empname=empname
    emp.age=age
    emp.designation=designation
    emp.salary=salary

    console.log(emp);

    history('/')

    
  }
  return (
    <>
     <h1 className='text-center mt-5'>Update Employee Details</h1>
     <p>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.</p>
     <Row>
      <Col md={5}>
      <img src='https://static.vecteezy.com/system/resources/previews/005/111/676/original/employee-illustration-on-a-transparent-background-premium-quality-symbols-line-flat-color-icon-for-concept-and-graphic-design-vector.jpg' width="400px" height="400px"/>
      </Col>
      <Col md={5}>
      <Form className='border border-4 p-4'>
      <Form.Group className="mb-3">
        <h3 className='text-center'>Update your Details</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your Name" value={empname} onChange={(e)=>setEmpname(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" value={age} onChange={(e)=>setAge(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agreed" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
      </Col>
     </Row>
    </>
    
  )
}

export default Edit