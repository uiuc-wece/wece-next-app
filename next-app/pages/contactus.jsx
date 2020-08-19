import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import styles from "../styles/Contactus.module.css";

import Container from "react-bootstrap/Container";

export default function ContactUs() {
  return (
    <Layout>
      <div className="content">
        <Container className="section">
          <SectionHead title="Contact Us_" top={true} />
          <SectionBody
            hoverEffect={true}
            link="mailto:wece.uiuc@gmail.com?subject=WECE%20Contact%20Us"
          >
            <h2 className={styles["contact-title"]}>Email us!</h2>
            <p className={styles["contact-desc"]}>
              Contact us with any questions at wece.uiuc@gmail.com
            </p>
          </SectionBody>
          <SectionBody
            hoverEffect={true}
            link="https://www.facebook.com/wece.uiuc/"
          >
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Visit us on Facebook!
                </h2>
                <p className={styles["contact-desc"]}>Give us a like :)</p>
              </div>
              <img
                className={styles["icon"]}
                alt="facebook"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNTZweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTguNDg5LDIwNC4wMWMwLjY2OC0zMC43MjQtMC41ODMtNTkuNjI3LTAuNTE0LTYxLjQzM2MwLjA5OS0yLjU3Mi0xNi45NDUsMS4wNjEtMTkuMDQ2LTEuMDUzICAgYy0yLjEwMS0yLjExNC0zLjMwOS0xOC4yMDUtMC41MjEtMTkuNTkxczE1LjM1NSwxLjEyOSwxOC4wMDctMC41MjZjMi42NTItMS42NTUtMTEuNTEzLTU1LjI2OSw0Ni42MDEtNDMuNDIxICAgYzEuNTg5LDAuNzk1LTAuMTMyLDE4LjczMi0xLjA1OSwyMC4xMjJjLTAuOTI3LDEuMzktMTIuNzA4LTEuNzg3LTE5LjA2MiwzLjE3N2MtNi4zNTQsNC45NjQtMy43MDcsMTguNjY0LTIuMzgzLDE5LjU5MSAgIGMxLjMyNCwwLjkyNywyMC4xODgsMC4xOTgsMjEuNDQ1LDEuNTg5czEuNDU2LDE4Ljc5OCwwLDIwLjEyMmMtMS40NTYsMS4zMjQtMjAuODE5LTIuNDEtMjIuNzY5LTEuMDU4ICAgYy0xLjYwNiwxLjExMyw0LjIyNCw2MC4wMzgsMi41NTgsNjIuMzczYy0xLjY2NiwyLjMzNS03LjczMSwyLjEzMy0xMS41NiwyLjIyNiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzYuNTc3LDI0My4zNThjNjAuOTEyLTEuNjQ4LDEwOC4xNDUtNTMuNDc4LDEwNC4zOTUtMTEwLjQ3MmMtMy42NjItNTUuNjQ3LTU0LjAyLTk3LjYxMi0xMDguOTIzLTk1Ljc1MyAgIEM3Ni4zOSwzOS4wMTcsMjkuMDIsODUuNjA1LDI5LjY4LDE0MS41NTVjMS41NDksODcuNDQzLDg1LjUwNSwxMDIuNjEsODkuMiwxMDEuNTUxIi8+PC9nPjwvc3ZnPg=="
              />
            </div>
          </SectionBody>
          <SectionBody
            hoverEffect={true}
            link="https://www.facebook.com/groups/wece.uiuc.group/"
          >
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Join our Facebook group!
                </h2>
              </div>
              <img
                className={styles["icon"]}
                alt="heart"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNTZweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTUxMSAyNzMgMjU2IDI1NjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLTUxMSAyNzMgMjU2IDI1NiIgd2lkdGg9IjI1NnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTI3My4yMzMsMzkzLjk3NGMtNC43MTctNjUuMTEtNjIuNDc5LTExMy4xNDctMTIzLjI5NC0xMDYuMzdjLTU5LjM3OCw2LjYxNy0xMDEuODQ5LDYyLjU0OC05Ny4xOTcsMTIxLjIxNyAgYzQuNzE2LDU5LjQ3OCw1Ni44NzMsMTA3LjkxNSwxMTYuNzIyLDEwNC40OTVjOTMuNTEtNS44OTksMTA1LjY3LTk2LjQ4NywxMDQuMzU5LTEwMC4zODkiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTM5OS4xNTIsNDY0LjMyMmMtMTcuNDE1LTEwLjI5Mi00MS42OTctMzQuNTk5LTQ5LjY2MS01NC4xMTJjLTQuMDM0LTkuODg0LTUuODk3LTI0LjI5OC0zLjUwOS0zNC43MDMgIGMyLjM4OC0xMC40MDQsOS4yODctMjAuMDE4LDE5LjA4NC0yNC4yNjFjOC4zNjgtMy42MjUsMTguMDg1LTQuMjMsMjYuNjkxLTEuMjEyYzEwLjg1MywzLjU0MSwxOS45MjUsMTUuNTk2LDIzLjIyOCwxNS4zNSAgYzMuMzA0LTAuMjQ2LDE2Ljg0Ny0xNy43NjcsMzUuMTA1LTE3LjI5OWMxMy41NTgsMC40NjQsMjYuNzkyLDkuNjU2LDMyLjgwNCwyMS44MTZjNy44MzEsMTUuODM4LDIuOTc1LDM2LjM4OC02LjA5Miw1MS41NTIgIGMtMTMuNTcsMjIuNjk2LTM2Ljc2OCwzOS40MzItNjAuOCw1MC40NjciLz48L3N2Zz4="
              />
            </div>
          </SectionBody>
          <SectionBody
            hoverEffect={true}
            link="https://www.instagram.com/wece.uiuc/"
          >
            <div className={styles["icon-box"]}>
              <div className="description">
                <h2 className={styles["contact-title"]}>
                  Follow us on Instagram!
                </h2>
              </div>
              <img
                className={styles["icon"]}
                alt="instagram"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNTZweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODguNjA3LDEyNC41MDZjMC4zMzcsMTQuMzcxLDEuMTEzLDM1LjUyMy0wLjYwNyw0MS40OTRjLTEuNzIxLDUuOTcxLTcuNzkzLDExLjYzOS0xMi45NTQsMTMuOTY2ICBjLTUuMTYxLDIuMzI4LTczLjg4LDEuMDEyLTc3LjUyNCwwcy05LjEwOS04LjgwNS0xMC4zMjMtMTEuNjM5Yy0xLjIxNC0yLjgzNC0wLjYwNy03Mi4wNTksMC44MS03Ny44MjcgIGMxLjQxNy01Ljc2OSw2LjM3Ni05LjEwOSwxMC45My0xMS4xMzNjNC41NTQtMi4wMjQsNTMuNTcyLTEuMjE0LDYyLjU0NS0wLjgxYzguOTc0LDAuNDA1LDE2LjkzNSw0Ljg1OCwxNy42MSwxMS41MzcgIGMwLjY3NSw2LjY4LTMuOTgyLDkuMzc4LTkuNTE0LDguOTA2Yy01LjUzMi0wLjQ3Mi05LjIyNi01LjcwOC02LjA2NC05LjcwMmMzLjE2My0zLjk5NCwyMC44MzctNC45NzMsMjMuMjY3LDAuMTg5ICBjMi40MzEsNS4xNjIsMi41MjksMTcuNjI0LTAuODEsMjAuNjUzYy0zLjMzOCwzLjAyOS0yNS4xOTktMS4wOTgtMjguNTUxLDAuMTkyYy0zLjM1MiwxLjI5LDEzLjI3MSwxNC4yNzMsMi40MTYsMzQuMjA0ICBjLTcuMTEzLDExLjQ2Ny0yMi42NzIsMTYuODIxLTM1LjA0MywxMC4zMTdjLTEzLjU3MS03LjEzNi0xNS42NTYtMjQuNDk4LTEwLjk4MS0zNS42MzdjMC41ODEtMS4zODUsNi4xMjEtMTQuMjU1LDE5LjEyOC0xNi4wMTYgIGM3LjYzOS0xLjAzNCwyMi4yNjUsMi4yNzcsMTcuMjA1LDYuODMxYy01LjA2LDQuNTU0LTQ2LjE1LTEuMTEzLTU2LjA2OCwwLjkxMSIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDguNzI4LDI5Ljk0N2MtNTguMTU0LDE4LjE5NS04OS40NjQsODAuOTQxLTcwLjMxNCwxMzQuNzUzYzE4LjY5Nyw1Mi41MzksNzguNTksNzkuMTgyLDEzMC45MDUsNjIuNDIzICBjNTMuMDM2LTE2Ljk5LDg1LjkwNy03NC43Myw3MC4wMTUtMTI4LjM4Yy0yNS4zMzUtODMuNzA3LTExMC4yNDUtNzUuNDA1LTExMy41MTEtNzMuMzc5Ii8+PC9zdmc+"
              />
            </div>
          </SectionBody>
        </Container>
      </div>
    </Layout>
  );
}
