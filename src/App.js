import "./App.css";
import WelcomeTemplate from "./components/welcome_template/welcomeEmail";
function App({ pageConfig }) {
    const { application } = pageConfig;
    return (
        <div className="App">
            <WelcomeTemplate application={application} />
        </div>
    );
}

export default App;
