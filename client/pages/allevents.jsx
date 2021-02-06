import AccountLayout from "../components/accountlayout";
import AccountWidget from "../components/accountwidget";
import styles from "../styles/Members.module.css";

import Container from "react-bootstrap/Container";
import Loader from "react-loader-spinner";
import MaterialTable from "material-table";
import { ThemeProvider } from "@material-ui/core/styles";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

import { base_url, theme } from "../constants.js";

const AllEvents = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const authenticated = useSelector((state) => state.authenticated);

  if (!authenticated) {
    const router = useRouter();
    router.push("/login");
  }

  useEffect(() => {
    const eventsUrl = base_url + "/events";
    axios
      .get(eventsUrl, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateRow = (newData, oldData) => {
    return new Promise((resolve, reject) => {
      const updateUrl = base_url + "/event/" + oldData._id;
      axios
        .put(updateUrl, newData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(() => {
          // after updating event, fetch all events
          const eventsUrl = base_url + "/events";
          axios
            .get(eventsUrl, {
              withCredentials: true,
            })
            .then((res) => {
              setEvents(res.data);
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

  return (
    <AccountLayout>
      <div className="container">
        <div className="content">
          <Container fluid className={`section ${styles["member-section"]}`}>
            <AccountWidget>
              <div className={styles["member-table"]}>
                <ThemeProvider theme={theme}>
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
                          field: "eventImage",
                          filtering: false,
                          render: (data) => (
                            <img
                              src={data.eventImage}
                              style={{
                                width: 60,
                                height: 40,
                                objectFit: "cover",
                                borderRadius: "10%",
                                border: "2px solid white",
                              }}
                            />
                          ),
                        },
                        {
                          title: "Title",
                          field: "title",
                        },
                        {
                          title: "Author",
                          field: "author",
                          editable: "never",
                        },
                        {
                          title: "Created",
                          field: "created",
                          type: "date",
                          editable: "never",
                        },
                        {
                          title: "Start date",
                          field: "startDate",
                          type: "datetime",
                        },
                        {
                          title: "End date",
                          field: "endDate",
                          type: "datetime",
                        },
                        {
                          title: "Recurring",
                          field: "recurring",
                          type: "boolean",
                        },
                        {
                          title: "Location",
                          field: "location",
                        },
                        {
                          title: "Description",
                          field: "description",
                        },
                        {
                          title: "Web Link",
                          field: "webConferenceLink",
                        },
                        {
                          title: "Link",
                          field: "actionLink",
                        },
                        {
                          title: "Points",
                          field: "points",
                        },
                        {
                          title: "Token",
                          field: "token",
                          render: (rowData) => (
                            <p>{rowData.token ? rowData.token.token : ""}</p>
                          ),
                          editable: "never",
                        },
                        {
                          title: "Hosts",
                          field: "hosts",
                          render: (rowData) => (
                            <p>
                              {rowData.hosts.map((h) => h.label).join(", ")}
                            </p>
                          ),
                          editable: "never",
                        },
                        {
                          title: "Committees",
                          field: "committees",
                          render: (rowData) => (
                            <p>
                              {rowData.committees.map((c) => c.label).join(",")}
                            </p>
                          ),
                          editable: "never",
                        },
                        {
                          title: "Attendees",
                          field: "attendees",
                          render: (rowData) => (
                            <p>{rowData.attendees.join(", ")}</p>
                          ),
                          editable: "never",
                        },
                      ]}
                      data={events}
                      options={{
                        filtering: true,
                      }}
                      title="Events"
                      editable={{
                        onRowUpdate: updateRow,
                      }}
                      style={{ boxShadow: "none" }}
                    />
                  )}
                </ThemeProvider>
              </div>
            </AccountWidget>
          </Container>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AllEvents;
