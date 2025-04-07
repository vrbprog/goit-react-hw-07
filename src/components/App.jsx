import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { useEffect } from "react"; // Import useEffect from React
import { fetchContacts } from "../redux/contactsOps"; // Import the fetchContacts action from contactsOps   

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts()); 
    }, [dispatch]); 

    return (
        <main>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </main>
    );
}
