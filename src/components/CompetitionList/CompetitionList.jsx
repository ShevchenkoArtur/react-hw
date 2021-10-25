import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCompetitions, searchCompetitions} from '../../redux/reducers/usersReducer/actions';
import {competitions as competitionsArr} from '../../data/competitions';
import {Box, Button, Container, TextField} from '@mui/material';
import CompetitionCard from './CompetitionCard/CompetitionCard';
import style from './CompetitionList.module.css'
import {useHistory} from 'react-router-dom';

const CompetitionList = () => {
    const {competitionsFiltered, searchCompetitionsValue} = useSelector(state => state.users)
    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        dispatch(getCompetitions(competitionsArr))
    }, [dispatch])

    return (
        <Container>
            <Box display='flex' mt={1}>
            <TextField
                value={searchCompetitionsValue}
                onChange={(e) => dispatch(searchCompetitions(e.target.value))}
                fullWidth
                placeholder='Enter competition name...'
                margin='normal'
            />
            <Button onClick={() => history.push('/create')}>Create Competition</Button>
            </Box>

            <Box className={style.list}>
                {
                    competitionsFiltered.map(el => <CompetitionCard key={el.id} competition={el}/>)
                }
            </Box>
        </Container>
    )
}

export default CompetitionList;