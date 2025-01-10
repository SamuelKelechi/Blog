import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

// ShareButton Component
const ShareButton = ({ post }) => {
  const encodedUrl = encodeURIComponent(window.location.href); // URL of the current post
  const encodedTitle = encodeURIComponent(post.title); // Title of the current post

  // Social Media share URLs
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle} - ${encodedUrl}`;


  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'140px'}}>
        Share on
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="share-button facebook" style={{display:'flex', height:'100%', alignItems:'center'}}>
        <FaFacebook />
      </a>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="share-button twitter" style={{display:'flex', height:'100%', alignItems:'center'}}>
        <FaTwitter />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="share-button linkedin" style={{display:'flex', height:'100%', alignItems:'center'}}>
        <FaLinkedin />
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="share-button whatsapp" style={{display:'flex', height:'100%', alignItems:'center'}}>
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ShareButton;
