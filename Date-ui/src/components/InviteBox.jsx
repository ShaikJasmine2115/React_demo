import { Link } from 'react-router';

const InviteBox = ({name}) => {
    return (
        <div className="invite-box">
            <h2>Date Invite  💌</h2>
            <h3>To : My <Link to="/KuKu" className="name">{name}</Link> 🌹</h3>           
        </div>
    )
}

export default InviteBox;