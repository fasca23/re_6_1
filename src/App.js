import './App.css';
import Watch from "./components/Watch";
import React, {useState} from 'react';
import Input from "./components/Input";

const timezoneUTC = new Date().getTimezoneOffset() / 60

// console.log(timezoneUTC)

function App() {
    const [watches, setWatches] = useState([
        {id: '1',
        offset: '+3',
        text: 'Москва'},

        {id: '2',
        offset: '+7',
        text: 'Томск'},

        {id: '3',
        offset: '+5',
        text: 'Челябинск'},

        {id: '4',
        offset: '+2',
        text: 'Калининград'},

        {id: '5',
        offset: '+6',
        text: 'Омск'},

        {id: '6',
        offset: '+10',
        text: 'Владивосток'},
])

    const addItem = (newWatch) => {
        // console.log(newWatch)
        setWatches([...watches, newWatch]);

    }
    const deleteItem = (deletedItemId) => {
        const newWatchesList = watches.filter((watch) => watch.id !== deletedItemId)
        setWatches(newWatchesList)
    }
    return (
        <div>
            <Input addItem={addItem}/>
            <ul style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}}>
                {watches.map((watch) => {
                    return (
                        <li>
                            <Watch key={watch.id} id={watch.id} deleteItem={deleteItem} title={watch.text} timezoneOffset={Number(watch.offset)+timezoneUTC} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default App;