import React, { useState } from "react";
// ... Import statements ...

export default function Join() {
  // ... Existing state and functions ...

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      toggleError();
      return;
    }

    try {
      const subscribeUrl = 'https://script.google.com/a/macros/illinois.edu/s/AKfycbwyz7FWiydfTM1wtqEwPHgml70VVsAD-oPw1ubejf7yZmrTcc6aSrQxDV5CTaxA5-xc/exec';
      const registerUrl = base_url + "/register";

      const requestData = {
        firstName,
        lastName,
        major,
        email,
        password,
        accountType: "MEMBER",
      };

      const [subscribeResponse, registerResponse] = await Promise.all([
        axios.post(subscribeUrl, requestData),
        axios.post(registerUrl, requestData),
      ]);

      if (subscribeResponse.status === 200 && registerResponse.status === 200) {
        setSuccessMessage(
          "You have successfully created a WECE account and subscribed to the WECE newsletter!"
        );
        toggleSubscribed();
      } else {
        setErrorMessage("An error occurred during registration.");
        toggleError();
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
      toggleError();
    }
  };

  return (
    <Layout>
      <br />
      <div className="content">
        <Container className="section">
          <SectionHead title="Join WECE_" top={true} />
          <SectionBody>
            <p>
              Sign up here to create an account, get weekly newsletters with
              <br />
              general meetings, upcoming events, and more.
            </p>
            <Form
              name="join-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              {/* ... Existing form fields ... */}
              
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button className={styles["submit-form"]} type="submit">
                Submit
              </Button>
            </Form>
          </SectionBody>
        </Container>
      </div>

      {/* Modals for success and error messages */}
      <Modal show={modalSubscribed} onHide={toggleSubscribed}>
        {/* ... Existing modal code ... */}
      </Modal>

      <Modal show={modalError} onHide={toggleError}>
        {/* ... Existing modal code ... */}
      </Modal>
    </Layout>
  );
}