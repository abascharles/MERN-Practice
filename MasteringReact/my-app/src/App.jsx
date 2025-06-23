import Student from './Student.jsx';

function App() {
  return (
    <div>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student />
    </div>
  );
}

export default App;
