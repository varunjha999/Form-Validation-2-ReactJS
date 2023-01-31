import React, {useState} from 'react';
//import ReactDOM from 'react-dom';

//import App from './App';

const BasicForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [newEntry, setNewEntry] = React.useState([]);
   
    const submitForm = (e) => {
        e.preventDefault();
        const data = {name, email, password};
        console.log(data);
        setNewEntry([...newEntry, data]);
        console.log(newEntry);
    };
   
    return (
        <div>
            <h1>Basic Form</h1>
            <form action="" onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}


            />
            <br /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button type="submit">Submit</button>

    
            </form>

            <div>
                {
                      newEntry.map((curElem) => {   
                        return (
                            <div className="showDataStyle">
                                <p>{curElem.name}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
    };

export default BasicForm;