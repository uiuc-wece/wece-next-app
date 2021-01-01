import AccountWidget from "../accountwidget";
import styles from "../../styles/Profilewidget.module.css";

import Image from "react-bootstrap/Image";

import { useSelector } from "react-redux";

const ProfileWidget = () => {
  const {
    email,
    firstName,
    lastName,
    accountType,
    studentStatus,
    major,
    graduationDate,
    profileImage,
  } = useSelector((state) => state);

  const education = () => {
    if (studentStatus != "NONE" && studentStatus && major) {
      return (
        <div className={styles["education"]}>
          <div className={styles["student-status"]}>{studentStatus}</div>
          <div className={styles["education-divider"]}>|</div>{" "}
          <div className={styles["major"]}>{major}</div>
        </div>
      );
    } else if (!major) {
      return (
        <div className={styles["education"]}>
          <div className={styles["student-status"]}>{studentStatus}</div>
        </div>
      );
    } else {
      return (
        <div className={styles["education"]}>
          <div className={styles["major"]}>{major}</div>
        </div>
      );
    }
  };

  let jsGradDate = new Date(graduationDate);
  const monthNames = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const formattedGraduationDate =
    monthNames[jsGradDate.getMonth()] + " " + jsGradDate.getFullYear();

  return (
    <AccountWidget>
      <div className={styles["profile-info"]}>
        <div className={styles["profile-left"]}>
          <Image
            className={styles["profile-image"]}
            src={profileImage}
            roundedCircle
          />
          <div className={styles["name"]}>{`${firstName} ${lastName}`}</div>
          <div className={styles["email"]}>{email}</div>
          <div className={styles["account-type"]}>{accountType}</div>
        </div>
        <div className={styles["profile-right"]}>
          {education()}
          <div className={styles["graduation"]}>
            Graduation{" "}
            <div className={styles["graduation-date"]}>
              {formattedGraduationDate}
            </div>
          </div>
        </div>
      </div>
    </AccountWidget>
  );
};

export default ProfileWidget;
