import React from 'react';
import PropTypes from 'prop-types';
import OnboardingHeader from '../Header/OnboardingHeader';

function OnboardingLayout({ children, classNames, pageTitle }) {
  return (
    <>
      <div className="wrapper onbording">
        <main>
          <section>
            <OnboardingHeader pageTitle={pageTitle} />
            <div className="ob-body">
              <div className={classNames}>{children}</div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

OnboardingLayout.propTypes = {
  children: PropTypes.any,
  pageTitle: PropTypes.any,
  classNames: PropTypes.any,
};

OnboardingLayout.defaultProps = {
  children: <p>Shopdot</p>,
  pageTitle: 'Signin',
  classNames: 'form-wrapper',
};

export default OnboardingLayout;
