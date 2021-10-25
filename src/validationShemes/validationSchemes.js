import * as yup from 'yup';

export const registerUser = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    secondName: yup.string().required('Second Name is required')
})

export const createCompetition = yup.object().shape({
    contestName: yup.string().required('Contest name is required')
})