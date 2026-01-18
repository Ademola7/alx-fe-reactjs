import UserProfile from "./UserProfile";
import UserContext from "./UserContext";

function App() {
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
