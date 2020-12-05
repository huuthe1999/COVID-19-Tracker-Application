import React from 'react'
import { Card as CardItem, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import classNames from 'classnames';

import './style.css';

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    return (
        <div className="root">
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={6} md={3} component={CardItem} className={classNames('card', 'infected')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} sm={6} md={3} component={CardItem} className={classNames('card', 'recovered')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} sm={6} md={3} component={CardItem} className={classNames('card', 'deaths')}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card
