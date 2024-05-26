import React, { useEffect, useState } from 'react'
import './FormNews.scss';
import { useNavigate } from 'react-router-dom';

const FormNews = () => {
    const navigate = useNavigate();
    const initialValues = {
        title: '',
        author: '',
        abstract: ''
    };
    const [data, setData] = useState(initialValues);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        let allNews = JSON.parse(localStorage.getItem('All News')) || [];
        allNews.push(data);
        localStorage.setItem('All News', JSON.stringify(allNews));
        setData(initialValues);
        navigate('/')
    };
    const validationForm = () => {
        switch(true) {
            case !data.author:
                return setMessage('');
            case data.author.length < 3:
                setMessage('Author name must be at least 3 characters');
                setBtnDisabled(true);
                break;
            case data.title.length < 3:
                setMessage('Title must be at least 3 characters');
                setBtnDisabled(true);
                break;
            case data.abstract.length < 10:
                setMessage('Body must be at least 10 characters');
                setBtnDisabled(true);
                break;
            default: 
                setMessage('');
                setBtnDisabled(false);
                break;
        }
    };

    useEffect(() => {
        validationForm();
    }, [data]);
  return (
    <form onSubmit={handleOnSubmit}>
        <fieldset>
            <legend>Create New</legend>
            <label htmlFor="author">Author:</label>
            <input type="text" name="author" id="author" placeholder='Jōichirō Yukihira' onChange={handleInputChange} value={data.author}/>
            <br /><label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" placeholder='Your title new' onChange={handleInputChange} value={data.title}/>
            <br /><label htmlFor="abstract">The body:</label>
            <textarea name="abstract" id="abstract" placeholder='Write here your body new...' onChange={handleInputChange} value={data.abstract}/>
        </fieldset>
            <p>{message}</p> <br />
            <button disabled={btnDisabled}>Send</button>
    </form>
  )
}

export default FormNews