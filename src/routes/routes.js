import CompetitionList from '../components/CompetitionList/CompetitionList';
import Competition from '../components/Competition/Competition';
import CreateCompetition from '../components/CreateCompetition/CreateCompetition';

export const routes = [
    {path: '/', component: CompetitionList},
    {path: '/competition/:id', component: Competition},
    {path: '/create', component: CreateCompetition},
]