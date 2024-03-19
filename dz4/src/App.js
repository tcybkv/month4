import React from 'react';

const App = () => {

    let counter = 0;

    const age = (e) => {
        if (e >= 18) {
            alert('Можно войти');
        } else {
            alert('Нельзя войти');
        }
    };

    const changeBlock = () => {
        counter++;
        const block = document.querySelector('.minBlock');
        if (counter % 2 === 0) {
            if (block) {
                block.style.transform = 'rotate(180deg)';
            }
        }
    };

    const inpUmnojenia =(e) => {
        const num = e.target.value
        console.log( num * 10)
    }

    const submit =(e) => {
        e.preventDefault()
        console.log({ title: 'Hello', body: 'world' });
    }
    const reset =() => {
        console.log('Отменено');
    }
    return (
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={() => age(Number(prompt('Сколько тебе лет?')))}>
                Сколько тебе лет?
            </button>

            <div className='minBlock' onClick={changeBlock} style={{ margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkblue', width: '50px', height: '50px', fontSize: '100px'}}>⅔</div>

            <input type="number" placeholder='введите число' onBlur={(e) => inpUmnojenia(e)}/>

            <form onSubmit={(event) => submit(event)} onReset={() => reset()} >
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        </div>
    );
};

export default App;
