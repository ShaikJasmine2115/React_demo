import { NavLink } from 'react-router';

const InviteBox = ({name}) => {
    return (
        <div className="invite-box">
            <h2>Date Invite  💌</h2>
            <h3>To : My <NavLink to="/KuKu" className="name">{name}</NavLink> 🌹</h3>           
        </div>
    )
}

export default InviteBox;