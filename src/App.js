import "./App.css";
function App({ pageConfig }) {
    console.log(pageConfig);
    return (
        <div className="App">
            <>
                <center>
                    <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        height="100%"
                        width="100%"
                        id="bodyTable"
                    >
                        <tr>
                            <td align="center" valign="top" id="bodyCell">
                                <div class="main">
                                    <p>
                                        <img
                                            src="https://cdn.auth0.com/styleguide/2.0.9/lib/logos/img/badge.png"
                                            width="50"
                                            alt="Your logo goes here"
                                        />
                                    </p>
                                    <h1>Welcome to !</h1>
                                    <p>
                                        Thank you for signing up. Please verify
                                        your email address by clicking the
                                        following link:
                                    </p>
                                    <p>
                                        <a href="{{ url }}">
                                            Confirm my account
                                        </a>
                                    </p>
                                    <p>
                                        If you are having any issues with your
                                        account, please don’t hesitate to
                                        contact us by replying to this mail.
                                    </p>
                                    <br />
                                    Thanks!
                                    <br />
                                    <strong></strong>
                                    <br />
                                    <br />
                                    <hr />
                                    <p>
                                        If you did not make this request, please
                                        contact us by replying to this mail.
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </center>
            </>
        </div>
    );
}

export default App;
