import React, { Component } from 'react';


export default class Login extends Component {

    constructor(props){
        super(props);
         this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
        this.state={
            user:'',
            pass:''
        }
    }

    onSubmit(event){
        console.log("Logged");
        if (this.state.user=='admin' && this.state.pass=='admin'){
            this.props.history.push("clientLanding")
        }else{
            alert('Error');
        }
        event.preventDefault();
    }

    onChangeUserName(event){
        this.setState({user:event.target.value});    }
    onChangePassword(event){
        this.setState({pass:event.target.value});
    }

    render() {
        return (
            <main data-page-scope="login">
            <article>
                <section className="row">
                    <div className="flex__container">
                        <div className="logo__splash__container"></div>
                        <div className="form__container">
                            <div className="container">
                                <h1>
                                    <span className="hide--text">Campaign Setup</span>
                                    <img src="./Images/login-logo.svg" alt="Campaign Setup"/>
                                </h1>
                                <form onSubmit={this.onSubmit}>                    
                                    <div className="form__group">
                                        <input className="text" value={this.state.user} onChange={this.onChangeUserName} placeholder="LionLogin Name" type="text"/>
                                    </div>
                                    <div className="form__group">
                                        <input className="text" value={this.state.pass} onChange={this.onChangePassword} placeholder="LionLogin Password" type="password"/>
                                    </div>
                                    <input type="hidden" id="returnUrl" name="returnUrl"/>
                                    <button type="submit" className="btn--default" role="button">
                                        <span className="icon__loading"></span><span className="btn__text">Let's Go</span>
                                    </button>
                                    <div className="actions">
                                        <a href="#">Request Access</a> | <a href="https://update.publicisgroupe.net/">Forgot Password?</a>
                                    </div>
                                    <div className="login-msg">
                                        <div className="alert alert--error">
                                            <div className="icon__container flex__container flex--ai--c">
                                                <figure>
                                                    <svg className="general__icon icon__exclamation" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1536 1536" space="preserve">
                                                        <path className="state--default" d="M768,0c139.3,0,267.8,34.3,385.5,103s210.8,161.8,279.5,279.5s103,246.2,103,385.5s-34.3,267.8-103,385.5
                                                        s-161.8,210.8-279.5,279.5S907.3,1536,768,1536s-267.8-34.3-385.5-103S171.7,1271.2,103,1153.5S0,907.3,0,768s34.3-267.8,103-385.5
                                                        S264.8,171.7,382.5,103S628.7,0,768,0z M896,1247v-190c0-9.3-3-17.2-9-23.5s-13.3-9.5-22-9.5H673c-8.7,0-16.3,3.3-23,10
                                                        s-10,14.3-10,23v190c0,8.7,3.3,16.3,10,23s14.3,10,23,10h192c8.7,0,16-3.2,22-9.5S896,1256.3,896,1247z M894,903l18-621
                                                        c0-8-3.3-14-10-18c-6.7-5.3-14.7-8-24-8H658c-9.3,0-17.3,2.7-24,8c-6.7,4-10,10-10,18l17,621c0,6.7,3.3,12.5,10,17.5
                                                        s14.7,7.5,24,7.5h185c9.3,0,17.2-2.5,23.5-7.5S893.3,909.7,894,903z"></path>
                                                    </svg>
                                                </figure>
                                            </div>
                                            <div className="content__container">
                                                <span className="field-validation-valid" data-valmsg-for="Login" data-valmsg-replace="true"></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>            
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            <footer></footer>
        </main>);
    }
}
