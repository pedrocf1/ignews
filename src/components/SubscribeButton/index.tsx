import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripejs';
import styles from './styles.module.scss';

interface SubscribeButtonProps{
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps){
    const [session] = useSession();
    
    async function handleSubscribe() {
        if(!session) {
            signIn('github')
            return;
        }

        // criação checkout session
        try{
            console.log("VOU FAZER O POST")
            const response = await api.post('/subscribe')
            console.log("FIZ O POST")
            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })
        }catch(error){
            alert(error.message)
        }
    }

    return(
        <button
         type="button"
         className={styles.subscribeButton}
         onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );

}