import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class App extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
          cardNumber: '',
          expiryDate: '',
          pinNumber: '',
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().required('Full Name is required'),
          phoneNumber: Yup.string()
            .min(6, 'Password must be at least 11 characters')
            .required('Phone Number is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
          cardNumber: Yup.string().required('Card Number is required'),
          expiryDate: Yup.string().required('Expiry Date is required'),
          pinNumber: Yup.string()
            .min(4, 'Pin must be 4 Numbers')
            .required('Pin Number is required'),
        })}
        onSubmit={(fields) => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <div class="qlForm">
            <Form>
              <br />
              <br />
              <div className="form-group">
                <Field
                  placeholder="Full Name"
                  name="fullName"
                  type="text"
                  className={
                    'form-control' +
                    (errors.fullName && touched.fullName ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  placeholder="Email"
                  name="email"
                  type="text"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                  pattern="^\S+@\S+\.\S+$"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  min="11"
                  max="13"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  alt="phoneNumber"
                  className={
                    'form-control' +
                    (errors.phoneNumber && touched.phoneNumber
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  min="6"
                  placeholder="Password"
                  name="password"
                  type="password"
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  min="6"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  name="cardNumber"
                  type="tel"
                  min="19"
                  max="19"
                  id="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  alt="cardNumber"
                  className={
                    'form-control' +
                    (errors.cardNumber && touched.cardNumber
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  min="4"
                  max="5"
                  name="expiryDate"
                  type="tel"
                  id="expiryDate"
                  placeholder="MM/YY"
                  alt="expiryDate"
                  className={
                    'form-control' +
                    (errors.expiryDate && touched.expiryDate
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name="expiryDate"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Field
                  minLenght="4"
                  maxLenght="4"
                  name="pinNumber"
                  type="password"
                  id="pinNumber"
                  placeholder="PIN Number"
                  alt="pinNumber"
                  className={
                    'form-control' +
                    (errors.pinNumber && touched.pinNumber ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="pinNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  SUBMIT
                </button>
              </div>
            </Form>
          </div>
        )}
      />
    );
  }
}

export { App };
