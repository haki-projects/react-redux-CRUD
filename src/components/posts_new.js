import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
      return (
        <div className='form-group has-danger'>
        <label>{field.label}</label>
        <input className='form-control'
        type={field.type}
          {...field.input}
        />
        <div className='text-help'>
        {field.meta.touched ? field.meta.error: ''}
        </div>
        </div>
      );
  }
    onSubmit(values) {
        console.log(values);
    }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title'
          name='title'
          type='text'
          component={this.renderField}
          />
          <Field
          label='Categories'
          name='categories'
          type='text'
          component={this.renderField}
          />
            <Field
          label='Content'
          name='content'
          type='text'
          component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}
/**
 * used to validate the form input by using if statements to check values.fieldName's for whatever we
 * want to validate. For now, we are checking the fields to make sure they are not empty
 * Any errors will be added to the errors object, and the error messages will be displayed under the
 * corresponding field
 * @param {*} values : all the values the user has entered into the form
 */
function validate(values){
    const errors={};

    //Validate the inputs from 'values'
      if(!values.title){
          errors.title = "Enter a title!";
      }
         if(!values.categories){
          errors.categories = "Enter a category!";
      }
         if(!values.content){
          errors.content = "Enter some content!";
      }

    return errors;
}
//The validate function is run when the form is submitted and checks the form for the if statements above
export default reduxForm({
  validate,
  form: 'PostsNewForm' //make sure the string assigned to the form property is unique.
})(PostsNew);