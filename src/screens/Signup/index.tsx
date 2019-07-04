import React, { memo } from 'react';
import { Formik, FormikProps } from 'formik';
import TextInput from '../../components/Form/TextInput';
import { FormErros, FormProps } from './types';
import { signup } from '../../request/services/signup';

function SignUp(): JSX.Element {
  return (
    <div>
      <Formik
        initialValues={{ email: '' }}
        validate={(values): FormErros => {
          const errors: FormErros = {};
          if (!values.email) {
            errors.email = 'você esqueceu algo algo importante!';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'algo errado não está certo com esse e-mail!';
          }
          return errors;
        }}
        onSubmit={(values): void => {
          signup(values.email).then();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }: FormikProps<FormProps>): JSX.Element => (
          <form onSubmit={handleSubmit}>
            <TextInput
              label="email"
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.email}
              touched={touched.email}
            />
            <button type="submit">entrar</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default memo(SignUp);
