// lib/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCoffee, faPenNib, faFilter,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faHouse, faBuilding, faPlus, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

// Disable auto-adding CSS since we imported it manually
config.autoAddCss = false;

library.add(faCoffee, 
    faFacebook, faInstagram, 
    faXTwitter, faYoutube, 
    faEnvelope, faPhone, 
    faHouse, faBuilding,
    faPlus, faPenNib, 
    faCheck, faDeleteLeft,
    faFilter, faMagnifyingGlass
);
