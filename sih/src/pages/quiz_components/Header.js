function Header({ username }) {
  const ButtonComponent = () => {
    const openNewWindow = () => {
      const newWindow = window.open(
        `http://localhost:5000/profile/${username}`,
        "_"
      ); // Replace with your desired URL and port
      if (newWindow) {
        newWindow.focus();
      } else {
        alert("Popup blocker may be preventing the new window from opening.");
      }
    };

    return (
      <button onClick={openNewWindow} className="btn btn-ui">
        Parents dashboard
      </button>
    );
  };

  return (
    <header className="app-header">
      <h1> Questions</h1>
      <ButtonComponent />
    </header>
  );
}

export default Header;
