import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Editor from './pages/Editor.js';
import Tester from './pages/Tester.js';
import './App.css';
const rawQuizString = localStorage.getItem('quizzes');
export const QuizContext = createContext();
const App = (props) => {
  const [ quizzes, setQuizzes ] = useState(rawQuizString? JSON.parse(rawQuizString): {});
  useEffect(() => {
      localStorage.setItem('quizzes', JSON.stringify(quizzes));
  }, [quizzes]);
  return (
    <div className="App">
      <QuizContext.Provider value={{quizzes, setQuizzes}}>
        <Router>
          <Switch>
            <Route path="/editor/:id?">
              <Editor />
            </Route>
            <Route path="/test/:id">
              <Tester />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
