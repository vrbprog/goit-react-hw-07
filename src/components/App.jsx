import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch from react-redux
import { useEffect } from "react"; // Import useEffect from React
import { fetchContacts } from "../redux/contactsOps"; // Import the fetchContacts action from contactsOps   
import { selectContacts, selectError, selectLoading } from "../redux/contactsSlice";

export default function App() {
    const dispatch = useDispatch();
    const contactsList = useSelector(selectContacts);
    const isError = useSelector(selectError)
    const isLoading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(fetchContacts()); 
    }, [dispatch]); 

    return (
        <main>
            <ContactForm />
            <SearchBox />
            {isError && <p>Something went wrong. Please try again later.</p>}
            {isLoading ? <p>Loading...</p> :
                contactsList.length === 0 ?
                    <p>Your contact list is empty. Please add a contact.</p> :
                    <ContactList />
            }
        </main>
    );
}
