import React from 'react'
import useGet from '../hooks/useGet'
import Loading from './Loading';

export default function AnalysisPage() {
    const { data, loading } = useGet('/analysis');
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className='container mt-3'>
            <h2 className='text-center m-4'>
                Analysis
            </h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(analysis => {
                            return (
                                <tr key={analysis.id}>
                                    <td>{analysis.id}</td>
                                    <td>{analysis.name}</td>
                                    <td>{analysis.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
