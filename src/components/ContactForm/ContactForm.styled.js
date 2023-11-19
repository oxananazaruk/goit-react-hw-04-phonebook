import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 600px;
  padding: 16px 32px;
  margin: 0 auto;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font: inherit;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
  font-size: 14px;
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 100px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.lg};
  padding: 16px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
`;
