import "./ContacList.css"

export default function ContactItem({ id, contact, onDelete }) {
  return (
    <div className="contact-list">
      <div className="contact-list__name">{contact}</div>
      <button className="contact-list__delete-btn" type="button" onClick={() => onDelete(id)} aria-label={`Delete ${contact}`} title="Delete">Delete</button>
    </div>
  )
}