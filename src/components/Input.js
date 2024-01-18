import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const Input = ({addItem}) => {

    const [data, setData] = useState({
        text: '',
        offset: '',
        id: uuid()
    })
    const handleSubmit = (event) => {
        event.preventDefault()

        setData({
            text: '',
            offset: '',
            id: uuid()
        })
        addItem(data)
    }
    const handleChange = ({target}) => {
        const {name, value} = target
        setData(prevData => ({...prevData, [name]: value}))
    }
    return (
        <div>
            <form onSubmit={handleSubmit} id="form" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <p>Введите название</p>
                    <input className="input__form" type="text" id="text" onChange={handleChange} value={data.text} name="text"/>
                </div>
                <div>
                    <p>Смещение часового пояса</p>
                    <input className="input__form" type="number" id="offset" onChange={handleChange} value={data.offset} name="offset"/>
                </div>
                <div>

                    <button onClick={handleSubmit} id="ok-button" style={{margin: "2rem"}}>
                        Создать часы
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Input;