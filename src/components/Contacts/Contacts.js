import { List, ListItem } from './Contacts.styled';
import { ContactCard } from '../ContactCard/ContactCard';

export const Contacts = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactCard contact={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};
