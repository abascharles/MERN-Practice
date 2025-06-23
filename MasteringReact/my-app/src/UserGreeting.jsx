function UserGreeting({ isLoggedIn = false, username = 'Guest' }) {
  //Storing conditionals in variables
  const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>;
  const loginPrompt = <h2 className="login-prompt">Please sign in to continue</h2>;

  //utilizing the conditionals
  return isLoggedIn ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
