import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


const TestForm = props => {
    return (
        <form onSubmit = {props.handleSubmit}>
            {
                props.questions.map((obj,index) => {
                    return (
                        <div key = {`${obj}__${index}`}>
                            <div>
                                {obj.question}
                            </div>
                            {
                                obj.vars.map((el,index) => {
                                return (
                                    <div key = {`${index}__${el}`}>
                                        <Field id = {el}  component = "input" name = {obj.question} type = "radio" value = {el}/>
                                        <label htmlFor= {el}>{el}</label>
                                    </div>
                                )
                            })
                            }
                            
                        </div>
                    )
                })
            }
            <button>Submit</button>
        </form>
    )
}

const TestFormRedux = reduxForm({form:"test"})(TestForm);

const Test = (props) => {
    
    const onTestSubmit = (props) => {
        console.log(props);
    }

    return (
        <div>
            <h1>Test page</h1>
            <TestFormRedux onSubmit ={onTestSubmit} questions = {props.questions}/>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        questions : state.testPage.questions
    }
}

export default connect(mapStateToProps)(Test)
