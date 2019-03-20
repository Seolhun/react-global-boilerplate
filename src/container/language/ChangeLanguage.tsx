import React, { PureComponent, Fragment } from 'react';

import { withTranslation, WithTranslation } from 'react-i18next';
import i18n from '../../i18n';

interface ChangeLanguageProps extends WithTranslation {
  t: (...args) => any;
}

class ChangeLanguage extends PureComponent<ChangeLanguageProps> {
  changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <button
          type='button'
          className='btn btn-main'
          onClick={() => this.changeLanguage('en')}
        >
          {t('english')}
        </button>
        <button
          type='button'
          className='btn btn-main'
          onClick={() => this.changeLanguage('ko')}
        >
          {t('korean')}
        </button>
      </Fragment>
    );
  }
}

export default withTranslation(['common', 'login'])(ChangeLanguage);
