import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from "./components/ContactForm/ContactForm"
import ContactItem from "./components/ContactItem/ContactItem"
import ContactList from "./components/ContactList/ContactList"

export default function App() {
  const [contact, setContact] = useState("")
  const [contacts, setContacts] = useState([])

  const addContact = () => {
    const contact = contact.trim()
    if (!contact) return

    const newContact = {
      id: Date.now() + Math.random(),
      contact
    }

    setContacts(prev => ({...prev, newContact}))
    setContact("")
  }

  const deleteContact = (id) => {setContacts(prev => prev.filter(c => c.id !== id))}

  useEffect(() => {console.log("Contact list changed:", contact), [contact]})


  return (
    <div className='app'>
      <div className='app__container'>
        <h1 className='app__title'>Contact List</h1>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  )
}