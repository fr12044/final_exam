import { useState } from "react"
import "./ContactForm.css"

export default function ContactForm({ onAdd }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
    e.preventDefault()

    onAdd({ name, phone, email })

    setName("")
    setPhone("")
    setEmail("")
}

return ( 
    <div className="contact-form" onSubmit={onSubmit}>
        <input className="contact-form__input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter contact name..." type="text"/>
        <input className="contact-form__input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter contact number..." type="text"/>
        <input className="contact-form__input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter contact email..." type="text"/>
        <button className="contact-form__add-bnt">Добавить контакт</button>
    </div> 
)
}