import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageBox } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './Contexts/AuthContext';
import styles from './styles/App.module.scss';


export function App() {

  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${user ? styles.contentSigned : ''}`}>
      <MessageBox />
      { !!user ? <SendMessageForm/> : <LoginBox/> }
    </main>
  )
}


