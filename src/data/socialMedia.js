import youtube_circle from "./../assets/img/logo/youtube-circle.png";
import facebook_circle from "./../assets/img/logo/facebook-circle.jpeg";
import instagram_square from "./../assets/img/logo/instagram-square.jpg";
import whatsapp_square from "./../assets/img/logo/whatsapp-square.png";
import { href } from "react-router-dom";

export const medias = {
    youtube: { id: "youtube", src: youtube_circle, alt: "Youtube logo", href: "https://www.youtube.com/@AparecidaJauSP" },
    facebook: { id: "facebook", src: facebook_circle, alt: "Facebook logo", href: "https://www.facebook.com/nsaparecidajahu" },
    instagram: { id: "instagram", src: instagram_square, alt: "Instagram logo", href: "https://www.instagram.com/aparecidajau/" },
    whatsapp: { id: "whatsapp", src: whatsapp_square, alt: "Whatsapp logo", href: "https://chat.whatsapp.com/EvxJksmUdIYDxzw5fUI99E" }
}

export const mediasIcons = [
    medias.youtube,
    medias.facebook,
    medias.instagram,
    medias.whatsapp
]