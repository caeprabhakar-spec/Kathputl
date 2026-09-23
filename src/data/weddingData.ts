/**
 * =========================================================================
 * WEDDING INVITATION CONFIGURATION
 * =========================================================================
 * All major wedding information comes from this single object.
 * Modify names, dates, venues, links, and asset paths here directly.
 */

export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  hindiTitle: string;
  date: string;
  time: string;
  venue: string;
  dressCode: string;
  description: string;
  icon: string;
  accentColor: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  location: string;
}

export const weddingData = {
  // Couple Details
  bride: "Sapna",
  brideFullName: "Sapna Rathore",
  brideParents: "Daughter of Smt. Sunita & Shri Vikram Singh Rathore",
  brideQuote: "In his eyes, I found my royal sanctuary and a lifetime of shared laughter.",

  groom: "Prabhakar",
  groomFullName: "Prabhakar Sharma",
  groomParents: "Son of Smt. Meenakshi & Shri Rajeshwar Sharma",
  groomQuote: "With her, every ordinary day turns into a vibrant Rajasthani festival.",

  // Wedding Date & Time
  weddingIsoDate: "2027-04-23T18:30:00+05:30", // For countdown timer
  displayDate: "23 April 2027",
  displayDay: "Friday",
  muhuratTime: "Godhuli Bela (06:30 PM Onwards)",
  tithi: "Vaishakh Krishna Dwitiya, Vikram Samvat 2084",

  // Venue Details
  venueName: "The Oberoi Rajvilas Palace",
  venueSubtext: "Royal Luxury Resort & Heritage Haveli",
  address: "Babaji Ka Thikana, Goner Road, Jagatpura, Jaipur, Rajasthan 302031",
  mapsUrl: "https://maps.google.com/?q=The+Oberoi+Rajvilas+Jaipur",
  contactPhone: "+91 141 268 0101",

  // Audio track
  music: "/assets/wedding-music.mp3",

  // Image Assets (Cleanly referenced and easily replaceable)
  assets: {
    background: "/assets/kathputli-background.png",
    backgroundFallback: "/assets/kathputli-background.svg",
    bride: "/assets/bride-kathputli.png",
    brideFallback: "/assets/bride-kathputli.svg",
    groom: "/assets/groom-kathputli.png",
    groomFallback: "/assets/groom-kathputli.svg",
    seal: "/assets/tap-to-open.png",
    sealFallback: "/assets/tap-to-open.svg",
  },

  // Wedding Celebrations (Events)
  events: [
    {
      id: "haldi",
      title: "Haldi Utsav",
      subtitle: "The Auspicious Turmeric Ceremony",
      hindiTitle: "हल्दी उत्सव",
      date: "Wednesday, 21 April 2027",
      time: "10:30 AM Onwards",
      venue: "Surya Haveli Courtyard, The Oberoi Rajvilas",
      dressCode: "Shades of Mustard Yellow & Marigold",
      description: "A joyous morning of golden turmeric, scented chandan paste, marigold showers, and dholak beats.",
      icon: "sun",
      accentColor: "#E5A912",
    },
    {
      id: "mehendi",
      title: "Mehendi Ki Raat",
      subtitle: "Henna, Folk Dances & Chaat Bazaar",
      hindiTitle: "मेहंदी की रात",
      date: "Wednesday, 21 April 2027",
      time: "05:30 PM Onwards",
      venue: "Gulab Bagh Gardens & Pavilion",
      dressCode: "Vibrant Greens, Teal & Floral Lehengas",
      description: "Delicate bridal henna patterns, traditional Rajasthani Ghoomar dancers, bangle bazaar, and live street delicacies.",
      icon: "sparkles",
      accentColor: "#1B5E38",
    },
    {
      id: "sangeet",
      title: "Royal Sangeet & Puppet Carnival",
      subtitle: "An Evening of Melodies & Puppetry",
      hindiTitle: "संगीत संध्या",
      date: "Thursday, 22 April 2027",
      time: "07:00 PM Onwards",
      venue: "Darbar Amphitheatre & Royal Lawns",
      dressCode: "Indo-Western Glitz & Royal Silks",
      description: "A theatrical night of live Rajasthani Kathputli performances, family dance showdowns, cocktails, and feast under starlit skies.",
      icon: "music",
      accentColor: "#9C1727",
    },
    {
      id: "wedding",
      title: "The Royal Vivah (Baraat & Pheras)",
      subtitle: "The Sacred Seven Vows",
      hindiTitle: "शुभ विवाह एवं फेरे",
      date: "Friday, 23 April 2027",
      time: "06:30 PM Baraat • 08:30 PM Pheras",
      venue: "Lotus Temple Mandap & Water Pavilion",
      dressCode: "Traditional Royal Rajputana Attire",
      description: "Grand elephant & horse procession with royal nagada drums, auspicious Varmala on water, and sacred pheras around the holy fire.",
      icon: "flame",
      accentColor: "#B81424",
    },
    {
      id: "reception",
      title: "Royal Dastoor & Gala Reception",
      subtitle: "Dinner & Celebrations with the Newlyweds",
      hindiTitle: "स्वागत समारोह",
      date: "Saturday, 24 April 2027",
      time: "07:30 PM Onwards",
      venue: "Maharaja Grand Ballroom",
      dressCode: "Black Tie or Regal Traditional",
      description: "A grand evening of Sufi melodies by renowned folk maestros, royal banquet dinner, and celebrating the beginning of forever.",
      icon: "crown",
      accentColor: "#C79A3B",
    },
  ] as WeddingEvent[],

  // Gallery Photos (Royal Frames)
  gallery: [
    {
      id: "photo1",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      caption: "When the puppet strings of destiny first intertwined.",
      location: "Amer Fort, Jaipur",
    },
    {
      id: "photo2",
      url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80",
      caption: "Under the golden jharokhas of Rajasthan.",
      location: "Jal Mahal, Jaipur",
    },
    {
      id: "photo3",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "Two souls, endless smiles, and a promise of forever.",
      location: "Hawa Mahal Courtyard",
    },
    {
      id: "photo4",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "Walking into our happily ever after together.",
      location: "The Oberoi Rajvilas",
    },
  ] as GalleryPhoto[],

  // Traditional Sanskrit Shloka
  blessings: {
    sanskritShloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaTranslation: "O Lord Ganesha of the curved trunk and immense brilliance like ten million suns, grant us freedom from all obstacles in our new beginning.",
    familyBlessing: "With the divine blessings of our beloved elders, the Sharma & Rathore families warmly request the honor of your presence and warm wishes."
  }
};
