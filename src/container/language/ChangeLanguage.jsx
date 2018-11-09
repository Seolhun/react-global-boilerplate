import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

import Button from '../../component/button';

@translate('common', { wait: true })
class ChangeLanguageContainer extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  render() {
    const { t } = this.props;
    return (
      <Fragment>
        <Button
          type="button"
          className="btn btn-main"
          onClick={() => this.changeLanguage('en')}
        >
          {t('english')}
        </Button>
        <Button
          type="button"
          className="btn btn-main"
          onClick={() => this.changeLanguage('ko')}
        >
          {t('korean')}
        </Button>
      </Fragment>
    );
  }
}

export default translate(['common', 'login'])(ChangeLanguageContainer);
