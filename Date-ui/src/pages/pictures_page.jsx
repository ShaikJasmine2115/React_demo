import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pics3.jpeg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import PictureCard from '../components/PictureCard';

const PicturesPage = () => {

    const pictures = [
        {id: 1, image: pic1, message:'Daddy KuKu'},
        {id: 2, image: pic2, message:'Mommy KuKu'},
        {id: 3, image: pic3, message:'Baby KuKu'},
        {id: 4, image: pic4, message:'KuKu of Chaos'},
        {id: 5, image: pic5, message:'KuKu of Peace'},
        {id: 6, image: pic6, message:'KuKu of Love'},
    ]
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '0.5rem' }}>Flip And See </h1>
            <div className="pictures-grid">
            {pictures.map((picture) => (
                <PictureCard key={picture.id} image={picture.image} message={picture.message} />
            ))}
            </div>
        </div>
    )
}

export default PicturesPage;