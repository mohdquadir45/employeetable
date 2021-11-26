import React from 'react'

export default function Table(props) {

    console.log(props.data)

    /* let data = {user: [
        {
            "id":1,
            "name":"Employee_One",
            "age" : "21",
            "gender":"Female",
            "email" : "employee.one@react.com",
            "phoneNo" : "9812312312"
            },
            {
            "id" : 2,
            "name":"Employee_Two",
            "age" : "23",
            "gender":"Female",
            "email" : "employee.two@react.com",
            "phoneNo" : "9534534534"
            },
            {
            "id":3,
            "name":"Employee_Three",
            "age" : "30",
            "gender":"Male",
            "email" : "employee.three@react.com",
            "phoneNo" : "8878978978"  },
            {
            "id":4,
            "name":"Employee_Four",
            "age" : "42",
            "gender":"Female",
            "email" : "employee.four@react.com",
            "phoneNo" : "7045645645"  },
            {
            "id":5,
            "name":"Employee_Five",
            "age" : "29",
            "gender":"Male",
            "email" : "employee.five@react.com",
            "phoneNo" : "8123898901"  },
            {
            "id":6,
            "name":"Employee_Six",
            "age" : "25",
            "gender":"Male",
            "email" : "employee.six@react.com",
            "phoneNo" : "9988009976"  }
            
            ]} */

            let userList = props.data.user.map((item, index) => (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNo}</td>
                </tr>
            ))
    return (
        <div className="value">
            <table  class="table table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
        </div>
    )
}
