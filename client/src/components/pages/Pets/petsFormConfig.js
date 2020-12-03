import * as Yup from 'yup';

export const initialValues = {
	name: '',
	desc: '',
};

export const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	desc: Yup.string().required('Description is required'),
});
