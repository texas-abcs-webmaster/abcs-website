import React from 'react';
import styles from './home_page.module.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



export default function HomePage() {
    return (
        <>
        <Grid container spacing={10}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <div className={styles.homepageName}>Association of Black Computer Scientists</div>            
            </Grid>

            <Grid className={styles.centered} item xs={12}>
                <div className={styles.mission}>Our mission</div>
                <div className={styles.mission_content}>Provide mentorship, networking, and growth opportunities to Black students pursuing a career in tech.
                     The organization works to build and empower members of Texas Computer Science and the broader Black 
                     community to pursue technology related education and careers. We hope to inspire and equip the next 
                     diverse generation of thoughtful technologists!</div>
            </Grid>

            <Grid className={styles.centered} item xs={4}>
                <div className={styles.pillar}>Company Engagement</div>
                <div>[Inset company engagement]</div>

            </Grid>

            <Grid className={styles.centered} item xs={4}>
                <div className={styles.pillar}>Social Events</div>
                <div>[Insert social events]</div>
            </Grid>

            <Grid className={styles.centered} item xs={4}>
                <div className={styles.pillar}>Community Engagement</div>
                <div>[Insert community engagement]</div>

            </Grid>

            <Grid className={styles.centered} item xs={6}>
                <div className={styles.pillar}>For students:</div>
                <Button variant="outlined" color="primary" href="#contained-buttons">
                    Click Here
                </Button>
            </Grid>

            <Grid className={styles.centered} item xs={6}>
                <div className={styles.pillar}>For sponsors:</div>
                <Button variant="outlined" color="primary" href="#contained-buttons">
                     Click Here
                </Button>
            </Grid>
        </Grid>
  </>
  )
  }