import React from 'react';
import AuthService from "../services/auth.service";
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingRoom = () => {
    return (
        <Formik
            initialValues={{ 
            Location:'',
            CostCenter:'',
            date:'',
            time:'',
            capacity:'',
            customerId:'',
            Food:'',
            Beverages:''
        }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                   const s=JSON.stringify(values, null, 2);
                   console.log(s);
                    setSubmitting(false);
                }, 1000);
              
             
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h1>Fill in your details for booking</h1>
                    <div className="form-group">
                        <label htmlFor="Location">Location</label>
                        <Field name="Location" className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="CostCentre">Cost Center</label>
                        <Field name="CostCentre" className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date (DD_MM_YYYY)</label>
                        <Field name="date" className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time (Mention AM/PM)</label>
                        <Field name="time" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Number of People</label>
                        <Field name="capacity" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerId">Customer Id</label>
                        <Field name="customerId" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Food">Food</label>
                        <Field name="Food" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Beverages">Beverages</label>
                        <Field name="Beverages" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
};


export default BookingRoom;