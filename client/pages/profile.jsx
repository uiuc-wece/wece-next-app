import AccountLayout from "../components/accountlayout";
import ProfileWidget from "../components/widgets/profile";
import UpdateAccountWidget from "../components/widgets/updateaccount";

import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { refreshAuth } from "../apihelper.js";

const UpdateAccount = () => {
  const authenticated = useSelector((state) => state.authenticated);

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <ProfileWidget />
            <UpdateAccountWidget />
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default UpdateAccount;
