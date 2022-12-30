import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingHeader from '../Header/OnboardingHeader';
import Button from '../common/Button';

function NoMatch() {
    const navigate = useNavigate();
    return (
        <>
            <OnboardingHeader pageTitle="No Page Found" />
            <main>
                <div className="w-100 d-flex justify-content-center singUpButton form__field">
                    <Button
                        onClick={() => navigate('/')}
                        className="button-primary"
                    >
                        Go to Home
                    </Button>
                </div>
            </main>
        </>
    );
}

export default NoMatch;
