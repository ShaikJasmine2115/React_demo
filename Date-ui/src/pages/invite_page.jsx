import InviteBox from '../components/InviteBox';
import HintPopup from '../components/HintPopup';
import { useState, useEffect } from 'react';

const name = "KuKu";

const InvitePage = () => {
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    
    const handleCloseHint = () => {
        setShowHint(false);
    }
    return (
        <>
        {showHint && (<HintPopup onClose={handleCloseHint} />)}
        <InviteBox name={name} />
        </>
    )
}

export default InvitePage;