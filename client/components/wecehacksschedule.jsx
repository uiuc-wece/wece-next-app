import React from 'react';
import styles from '../styles/WECEHacks.module.css';
import SectionHead from "../components/sectionhead";

export default function ScheduleTable() {
    return (
        <div>
        <SectionHead title="Schedule" top={false} wecehacks={true} />
        <div className={styles["wecehacks-center-wrapper"]}>
            <h3 className={styles["schedule-text-h3"]}>Day 1: April 8</h3>
        </div>
        <div className = {styles["schedule"]} id="schedule">
          <table className={styles['schedule-table']}>
            <tr>
              <th className = {styles['table-title']}>Time</th>
              <th className = {styles['table-title']}>Event</th>
            </tr>
            <tr>
              <td className = {styles['table-data']}>11:00 am</td>
              <td className = {styles['table-data']}>Opening Ceremony</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>12:00 pm</td>
              <td className = {styles['table-data']}>Hacking Starts</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>1:00 pm</td>
              <td className = {styles['table-data']}>Lunch</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>2:00 pm</td>
              <td className = {styles['table-data']}>Workshop</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>3:00 pm</td>
              <td className = {styles['table-data']}>SNYK MLH Event</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>4:00 pm</td>
              <td className = {styles['table-data']}>Workshop</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>6:00 pm</td>
              <td className = {styles['table-data']}>Workshop</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>7:00 pm</td>
              <td className = {styles['table-data']}>Dinner</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>8:00 pm</td>
              <td className = {styles['table-data']}>MLH Mini Event</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>9:00 pm</td>
              <td className = {styles['table-data']}>ECEB Closes</td>
            </tr>
          </table>
        </div>
        <div className={styles["wecehacks-center-wrapper"]}>
          <h3 className={styles["schedule-text-h3"]}>Day 2: April 9</h3>
        </div>
        <div className = {styles["schedule"]} id="schedule">
          <table className={styles['schedule-table']}>
            <tr>
              <th className = {styles['table-title']}>Time</th>
              <th className = {styles['table-title']}>Event</th>
            </tr>
            <tr>
              <td className = {styles['table-data']}>9:00 am</td>
              <td className = {styles['table-data']}>Breakfast</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>12:00 pm</td>
              <td className = {styles['table-data']}>Soft Deadline on Devpost</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>1:00 pm</td>
              <td className = {styles['table-data']}>Hacking Ends/Lunch</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>2:00 pm</td>
              <td className = {styles['table-data']}>Project Demo's</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>3:00 pm</td>
              <td className = {styles['table-data']}>Judging Starts/Outreach Event</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>4:00 pm</td>
              <td className = {styles['table-data']}>Closing Ceremony</td>
            </tr>
            <tr>
              <td className = {styles['table-data']}>5:00 pm</td>
              <td className = {styles['table-data']}>Event Ends</td>
            </tr>
          </table>
        </div>
        </div>
    );
}