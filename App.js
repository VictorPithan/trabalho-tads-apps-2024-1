import SingUp from './src/pages/sign-up.screen';
import Quiz from './src/pages/quiz.screen';
import { PAGES } from './src/utils/pages-labels';
import { useState } from 'react';
import Home from './src/pages/home.screen';

export default function App() {
  const [screen, setScreen] = useState(PAGES.SIGN_UP)
  const [user, setUser] = useState()

  const userRegister = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  const navigate = (screenToNavigate) => {
    setScreen(screenToNavigate)
  }
  return (
    <>
      {screen == PAGES.SIGN_UP && <SingUp navigate={navigate} userRegister={userRegister}/>}
      {screen == PAGES.HOME && <Home navigate={navigate} user={user} />}
      {screen == PAGES.QUIZ && <Quiz navigate={navigate} user={user} />}
    </>
  );
}