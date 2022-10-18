import React from 'react';

const Note = ({ data }) => {
    return (
        <div className='noteWrapper'>
            <div></div>
            <div>
                <h4>Note</h4>
                <ul>
                    {data.map((d, i) => (
                        <li key={i}><p className='text mt-1'>{d}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Note;
