import * as Yup from 'yup';

export const initialValues = {
	name: '',
	email: '',
	password: '',
};

export const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().required('Email is required'),
	password: Yup.string().required('Password is required'),
});
