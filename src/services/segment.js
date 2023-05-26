import { Analytics } from '@segment/analytics-node'
const analytics = new Analytics({ writeKey: '9XQvrr1qfUSsGRW2tX5n7fiBHO1ZCYMG' })

export async function identify(userDetails){
    await analytics.identify({
        userId:'SHOPDOT-'+userDetails.id,
        traits: {
            name: userDetails.first_name+' '+userDetails.last_name,
            email: userDetails.email,
            createdAt: userDetails.createdAt
        }
    });
}

export function track(userDetails){
    return 1;
    analytics.track({
        userId:'SHOPDOT-'+userDetails.id,
        event: 'Signed Up',
        properties: {
            name: userDetails.first_name+' '+userDetails.last_name,
            email: userDetails.email,
            createdAt: userDetails.createdAt
        }
    });
}