import AccountLayout from "../components/accountlayout";
import AccountWidget from "../components/accountwidget";
import styles from "../styles/Members.module.css";

import Container from "react-bootstrap/Container";
import Loader from "react-loader-spinner";
// import MaterialTable from "material-table";
// import { ThemeProvider } from "@material-ui/core/styles";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

// import { base_url, theme } from "../constants.js";
import { base_url } from "../constants.js";

const Members = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const authenticated = useSelector((state) => state.authenticated);

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }

  useEffect(() => {
    const usersUrl = base_url + "/users";
    axios
      .get(usersUrl, {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateRow = (newData, oldData) => {
    return new Promise((resolve, reject) => {
      const updateUrl = base_url + "/user/" + oldData._id;
      axios
        .put(updateUrl, newData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(() => {
          // after updating user, fetch all users
          const usersUrl = base_url + "/users";
          axios
            .get(usersUrl, {
              withCredentials: true,
            })
            .then((res) => {
              setUsers(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      resolve();
    });
  };

  const editAccountType = (props) => {
    return (
      <select
        name="account type"
        defaultValue={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value="MEMBER">MEMBER</option>
        <option value="CHAIR">CHAIR</option>
        <option value="BOARD">BOARD</option>
        <option value="ADMIN">ADMIN</option>
        <option value="SPONSOR">SPONSOR</option>
      </select>
    );
  };

  const editStudentStatus = (props) => {
    return (
      <select
        name="student status"
        defaultValue={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value="UNDERGRADUATE">UNDERGRADUATE</option>
        <option value="GRADUATE">GRADUATE</option>
        <option value="ALUMNI">ALUMNI</option>
        <option value="NONE">NONE</option>
      </select>
    );
  };

  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className={`section ${styles["member-section"]}`}>
            <AccountWidget>
              <div className={styles["member-table"]}>
                {/* <ThemeProvider theme={theme}>
                  {loading ? (
                    <div className="loading-container">
                      <Loader
                        type="Oval"
                        color="#ace8ac"
                        height={50}
                        width={50}
                      />
                    </div>
                  ) : (
                    <MaterialTable
                      columns={[
                        {
                          title: "Image",
                          field: "profileImage",
                          editable: "never",
                          filtering: false,
                          render: (data) => (
                            <img
                              src={data.profileImage}
                              style={{
                                width: 50,
                                height: 50,
                                objectFit: "cover",
                                borderRadius: "50%",
                                border: "2px solid white",
                              }}
                            />
                          ),
                        },
                        {
                          title: "Email",
                          field: "email",
                          editable: "never",
                          filtering: false,
                        },
                        {
                          title: "First name",
                          field: "firstName",
                          editable: "never",
                        },
                        {
                          title: "Last name",
                          field: "lastName",
                          editable: "never",
                        },
                        {
                          title: "Account type",
                          field: "accountType",
                          editComponent: editAccountType,
                        },
                        { title: "Major", field: "major", editable: "never" },
                        {
                          title: "Student status",
                          field: "studentStatus",
                          editComponent: editStudentStatus,
                        },
                        {
                          title: "Graduation date",
                          field: "graduationDate",
                          type: "date",
                          editable: "never",
                        },
                        { title: "Points", field: "totalPoints" },
                        {
                          title: "Join date",
                          field: "joinDate",
                          type: "date",
                          editable: "never",
                        },
                      ]}
                      data={users}
                      options={{
                        filtering: true,
                      }}
                      title="All Members"
                      editable={{
                        onRowUpdate: updateRow,
                      }}
                      style={{ boxShadow: "none" }}
                    />
                  )}
                </ThemeProvider> */}
              </div>
            </AccountWidget>
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Members;
