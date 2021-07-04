import styles from ".../styles/Recentposts.module.css";
import React from "react";

export default function RecentPosts({title, post1, post2, post3}) {
    return (
        <RecentTop>
          <div className={styles["recent-body"]}>
            <div className={styles["recent-title"]}>
              <h3>{title}</h3>
            </div>
          </div>
        </RecentTop>
      );
}
