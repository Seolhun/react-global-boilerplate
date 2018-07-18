import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import FacebookLogin from 'react-facebook-login';
import ChangeLanguageContainer from '../language';

import { postLoginByFacebookAction } from '../../store/actions';


import { OAUTH } from '../../constant';
import styles from './LoginView.scss';

class LoginView extends Component {
  static propTypes = {
    postLoginByFacebook: PropTypes.func.isRequired,
  }

  responseFacebook = (response) => {
    const { postLoginByFacebook } = this.props;
    postLoginByFacebook(response);
  }

  render() {
    return (
      <section>
        <div className="container absolute-center">
          <div className="row">
            <div className="col-sm-12 text-right">
              <ChangeLanguageContainer />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className={`${styles['login-box']} text-center`}>
                <div className={`${styles['logo-box']}`}>
                  <img
                    alt="airblock logo"
                    src="https://static.airbridge.io/images/airbloc/protocol_logo_2.png"
                  />
                </div>
                <p className={styles.slogan}>
                  Find your customer in a decentralized data marketplace.
                </p>
                <div className={styles['login-with-facebook']}>
                  <FacebookLogin
                    appId={OAUTH.FACEBOOK}
                    size="medium"
                    cssClass={styles['facebook-login-btn']}
                    fields="name, email, picture"
                    // onClick={componentClicked}
                    icon={<i className="fa fa-facebook" />}
                    callback={this.responseFacebook}
                    onFailure={() => null}
                  >
                    Continue with Facebook
                  </FacebookLogin>
                  <p>
                    Login with facebook advertising account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  postLoginByFacebook: postLoginByFacebookAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
