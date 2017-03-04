import React from 'react'
import styles from './HeroLanding.css'
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index'

// import own components
import Form from './../Form/Form'

const HeroLanding = (props) =>{
  return (
    <div className={styles.mainDiv}>
        <Grid>
          <Row center="xs" start="md">
            {/* TEXT CONTAINER */}
            <Col md={4} mdOffset={1} lgOffset={0} lg={5} className={styles.textColumn}>
              <h1 className={styles.primaryText}>eInkNews</h1>
              <h2 className={styles.secondaryText}>Read your favourite news on your eBook</h2>
              <div className={styles.buttonContainer}>
              </div>
            </Col>
          </Row>
        </Grid>
        <Form
          submitForm={props.submitForm}
          email={props.email}
          subscriptions={props.subscriptions}
          addSubscription={props.addSubscription}
          deleteSubscription={props.deleteSubscription}
          selectDevice={props.selectDevice}
          device={props.device}
        />
    </div>
  )
}

export default HeroLanding
