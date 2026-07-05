import CloseButton from './CloseButton';

const HintPopup = ({onClose}) => {
    return (
        <div className='overlay'>
            <div className="hint-popup">
                <CloseButton onClick={onClose} />
                <h2>Challenge <span style={{ color: 'red' }}>!</span></h2>   
                {/* <p>DO NOT ignore the dotted underlines.</p>       */}
                <p>Hover slowly and thou shall find Easter Eggs</p>
            </div>
        </div>
    )
}

export default HintPopup;