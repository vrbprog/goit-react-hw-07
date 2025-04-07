import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
    const filteredList = useSelector(selectFilteredContacts);
    const listItems = filteredList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
    ));

    return <ul className={css.contactList}>{listItems}</ul>;
}
