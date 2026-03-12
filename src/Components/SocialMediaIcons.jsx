import { mediasIcons } from '../data/socialMedia';

const SocialMediaIcons = ({ className1, className2 }) => {
  return (
    <div className={className1}>
      {mediasIcons.map((mediaIcon) => (
        <a key={mediaIcon.id} href={mediaIcon.href} target='_blank'>
          <img
            src={mediaIcon.src}
            alt={mediaIcon.alt}
            className={className2}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;