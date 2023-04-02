import "./App.css";
import { Header } from "./components/Header";
import { AddFriendForm } from "./components/AddFriendForm";
import { FilteredList } from "./components/FilteredList";

function App() {
  return (
    <div className="root-container">
      <Header />
      <AddFriendForm />
      <FilteredList />
    </div>
  );
}

export default App;
