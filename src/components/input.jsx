// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import style from './style.module.css';

// class ContactForm extends Component {
//     state = {
//         id: '',
//         name: '',
//         number: '',
//     };

//     nameInputId = nanoid();
//     numberInputId = nanoid();

//     handleInputChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({
//             id: nanoid(),
//             [name]: value,
//         });
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         console.log('handleSubmit', this.state);
//         this.props.onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         return (
//             <form
//                 onSubmit={this.handleSubmit}
//                 htmlFor={this.nameInputId}
//                 className={style.form}
//             >
//                 <label className={style.name}>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         id={this.nameInputId}
//                         value={this.state.name}
//                         onChange={this.handleInputChange}
//                         //value={this.state.inputValue}
//                         required
//                     />
//                 </label>
//                 <label className={style.name}>
//                     Number
//                     <input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         id={this.numberInputId}
//                         value={this.state.number}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                 </label>
//                 <label className={style.btn_label}>
//                     <button type="submit" className={style.btn}>
//                         Add Contact
//                     </button>
//                 </label>
//             </form>
//         );
//     }
// }
// export default ContactForm;
// ///////////////////
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import style from './style.module.css';

function ContactForm({ onSubmit }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;
        // setState({
        //     id: nanoid(),
        //     [name]: value,
        // });
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
        if (name === 'id') setId(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // onSubmit({ name: name, number: number, id: id });
        onSubmit({ name, number, id });
        setName('');
        setNumber('');
        setId('');
        // reset();
    };

    // const reset = () => {
    //     this.setState({ name: '', number: '' });
    // };

    return (
        <form
            onSubmit={handleSubmit}
            htmlFor={nameInputId}
            className={style.form}
        >
            <label className={style.name}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={nameInputId}
                    value={name}
                    onChange={handleInputChange}
                    //value={this.state.inputValue}
                    required
                />
            </label>
            <label className={style.name}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id={numberInputId}
                    value={number}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label className={style.btn_label}>
                <button type="submit" className={style.btn}>
                    Add Contact
                </button>
            </label>
        </form>
    );
}
export default ContactForm;
