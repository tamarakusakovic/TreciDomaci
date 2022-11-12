import axios from 'axios';
import React, { useState } from 'react'
import useGet from '../hooks/useGet'
import Input from './Input';
import Loading from './Loading';

export default function LaboratoriesPage() {
    const { data, loading, setData } = useGet('/laboratories');
    const [name, setName] = useState('')
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className='container mt-2'>
            <h2 className='text-center m-2'>Laboratories</h2>
            <div className='row d-flex justify-content-between'>
                <div className='col-7'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(element => {
                                    return (
                                        <tr key={element.id}>
                                            <td>{element.id}</td>
                                            <td>{element.name}</td>
                                            <td>{element.city}</td>
                                            <td>{element.address}</td>
                                            <td>{element.phone}</td>
                                            <td>
                                                <button className='btn btn-danger'
                                                    onClick={async () => {
                                                        try {
                                                            await axios.delete('/laboratories/' + element.id);
                                                            setData(prev => {
                                                                return prev.filter(l => l.id !== element.id);
                                                            })
                                                        } catch (error) {
                                                            alert(JSON.stringify(error.response.data));
                                                        }
                                                    }}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-4'>
                    <h3>Add new laboratory</h3>
                    <form
                        onSubmit={async e => {
                            e.preventDefault();
                            const res = await axios.post('/laboratories', {
                                name,
                                city,
                                address,
                                phone
                            });
                            setData(prev => [...prev, res.data]);
                        }}
                    >
                        <Input label='Name' value={name} onChange={setName} />
                        <Input label='City' value={city} onChange={setCity} />
                        <Input label='Address' value={address} onChange={setAddress} />
                        <Input label='Phone' value={phone} onChange={setPhone} />
                        <button type='submit' className='form-control btn btn-secondary mt-2'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
