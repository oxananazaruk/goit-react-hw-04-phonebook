import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,
      'Phone number is not valid. Min 7 numbers (101-01-01)'
    )
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
