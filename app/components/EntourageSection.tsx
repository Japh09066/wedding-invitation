'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: 'easeOut' },
});

// ─── Style Classes ────────────────────────────────────────────
const groupLabel = "font-['Playfair_Display',serif] text-[#caa687] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-medium";
const groupName  = "font-['Playfair_Display',serif] text-[#253d5b] text-[10px] sm:text-[11px] md:text-xs leading-relaxed";
const callig     = "font-['Great_Vibes',cursive] text-[#caa687]";
const sectionRule = "block h-px bg-gradient-to-r from-transparent via-[#caa687]/25 to-transparent";

// ─── Data ─────────────────────────────────────────────────────

const parentsGroom = [
  'Pastor Samuel Salloman',
  'Mrs. Juvy Salloman',
];

const parentsBride = [
  'Mrs. Ellen Getes',
];

const officiatingMinisters = [
  'Pastor Joer Barlizo',
  'Pastor Nicanor Buo',
  'Pastor Mariano Salloman',
];

const ninongs = [
  'Ptr. Nicolas L. Palarao',
  'Ptr. Bartman M. Barrientos',
  'Ptr. Apolonio A. Pastera',
  'Ptr. Dionie A. Cientos',
  'Ptr. Jacob A. Suarez',
  'Ptr. Isaias Guisando',
  'Ptr. Glen Siega',
  'Ptr. Benjamin Mahinay',
  'Ptr. Nicanor M. Buo',
  'Ptr. Moses Corro',
  'Ptr. Jonathan Muralla',
  'Ptr. Emmanuel Paul C. Barcenas',
  'Ptr. Ricardo B. De Asis',
  'Ptr. Vedasto B. Buctot Jr.',
  'Mr. Elias B. Buctot',
  'Mr. Rudy B. Dadulo',
  'Mr. Gilme Laurito',
  'Mr. Diosdado Balingcos',
  'Mr. Amon Buctot',
  'Mr. Joseph Rago',
  'Mr. Harold Tan',
  'Mr. Jay Estela',
  'Mr. Antonio P. Masin',
  'Mr. Ryan Buenaventura',
  'Mr. Ric Grafil',
];

const ninangs = [
  'Mrs. Charity L. Palarao',
  'Mrs. Rexy Barrientos',
  'Mrs. Gladys Blaine A. Pastera',
  'Mrs. Menchie C. Cientos',
  'Mrs. Nellie L. Suarez',
  'Mrs. Visminda Guisando',
  'Mrs. Marivic M. Siega',
  'Mrs. Edna Celeste',
  'Mrs. Annabelle A. Buo',
  'Mrs. Gercel D. Corro',
  'Mrs. Rizalie Grace Muralla',
  'Mrs. Naresh M. Barcenas',
  'Mrs. Anna Marie R. De Asis',
  'Mrs. Chiqui B. Buctot',
  'Mrs. Jennifer B. Buctot',
  'Mrs. Elsa B. Dadulo',
  'Mrs. Ester B. Laurito',
  'Mrs. Eunice Balingcos',
  'Mrs. Ruth Buctot',
  'Doc. Jenneth Rago',
  'Mrs. Julie Ann Tan',
  'Mrs. Grace Estela',
  'Mrs. Nancy K. Masin',
  'Mrs. Joanne Buenaventura',
  'Mrs. Rodelyn Grafil',
  'Mrs. Loreta Mogueis',
  'Ms. Micah Pusa',
];

const bestMan = 'Mr. Hero Guisando';
const maidOfHonor = 'Ms. Micah Pusa';

const groomsmen = [
  'Mr. Vynz Ramoso',
  'Mr. Gerhardt Celeste',
  'Mr. Van Shinar Salloman',
  'Mr. Clark Ruzshel Buctot',
  'Mr. Josh Miguel Laurito',
  'Mr. Vence Andrey Buctot',
  'Mr. Rafael Abantao',
  'Mr. Rogin Castillo',
  'Mr. Jud Enoir',
];

const bridesmaids = [
  'Ms. Rica Mae Bulingit',
  'Ms. Jellian Jamio',
  'Ms. Jazzel Lincuna',
  'Ms. Yesheen Dawn Poliran',
  'Ms. Zhen Chloe Buctot',
];

const juniorNinongs = [
  'Mr. Elmer Kristoffer Mogueis',
  'Ptr. Jenboy Luston',
  'Ptr. John B. Carillo',
  'Ptr. Jimmy V. Rivera',
  'Ptr. Dixie Rey P. Minardo',
  'Ptr. Jonathan E. Fernandez',
  'Ptr. Jessie M. Garzon',
  'Ptr. Aronry V. Wales',
  'Ptr. Carl Glenn Morta',
  'Mr. Jay Lagan',
  'Mr. Jun Joshua Lucop',
  'Mr. Kevin Cabrera',
  'Mr. Redyl Dadulo',
  'Engr. Jusam Salloman',
  'Mr. Francis Orge',
  'Atty. Sunny Cientos',
  'Mr. Al Anthony Caldona',
  'Mr. David C. Vacunawa Jr.',
];

const juniorNinangs = [
  'Mrs. Joyce Jane Mogueis',
  'Mrs. Zenith Joy Luston',
  'Mrs. Caryn Carillo',
  'Mrs. Pearlie B. Rivera',
  'Mrs. Honey Louraine B. Minardo',
  'Mrs. Ana Fe C. Fernandez',
  'Mrs. Jenive Ryl G. Garzon',
  'Mrs. Dinah P. Wales',
  'Mrs. Mercy Faith Morta',
  'Mrs. Ruth Lagan',
  'Ms. Rima C. Justimbaste',
  'Mrs. Priscila Cabrera',
  'Mrs. Jeralyn Dadulo',
  'Doc. Doraine Faye Salloman',
  'Mrs. Joymae Shiela Orge',
  'Mrs. Faith Cientos',
  'Ms. Jhunna May Celeste',
  'Mrs. Nhycy Lyn M. Vacunawa',
];

const candleLighters = [
  { male: 'Mr. Renyl B. Dadulo', female: 'Mrs. Marianne Joyce Dadulo' },
  { male: 'Mr. Jay Mark Fernandez', female: 'Mrs. Elvie Jae Fernandez' },
  { male: 'Mr. Marjem Libato', female: '' },
];

const penBearer = 'Theo James Buctot';
const bibleBearers = ['Jehoash Ai Errua', 'Yophiel Mattahry Mahinay'];
const contractBearer = 'Zamir Adrian Buctot';
const littleGroom = 'Joaquin Mason Salloman';
const littleBride = 'Raya Ellisse Dadulo';

const flowerGirls = [
  'Xhandrei Wei Tan',
  'Heather Sky Orge',
  'Dreanna Dennisse Logrono',
  'Kirsten Jill Estela',
  'Zara Athalia Carisse Luston',
];

const bannerBearer = 'Spring Fiel / Apple Errua';

const singers = [
  'Jhunna May Celeste',
  'Joyce Jane Mogueis',
  'Elvie Jae Fernandez',
  'Jeralyn Dadulo',
  'Lovely Bayer',
];

const hosts = ['Joyce Jane Mogueis', 'Jeralyn Dadulo'];

// ─── Main Component ──────────────────────────────────────────
export default function EntourageSection() {
  return (
    <section
      id="entourage"
      className="bg-gradient-to-b from-floral-cream to-floral-bg py-16 sm:py-20 flex items-center justify-center"
    >
      <div className="relative w-full max-w-[640px] mx-3 sm:mx-6">
        {/* Outer ornate frame */}
        <div className="absolute inset-0 border border-[#caa687]/25 rounded-sm pointer-events-none" />
        <div className="absolute inset-[6px] border border-[#caa687]/10 rounded-sm pointer-events-none" />

        {/* Subtle background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
          <svg className="w-3/4 h-3/4" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="120" stroke="#253d5b" strokeWidth="0.8" />
            <circle cx="200" cy="200" r="90" stroke="#253d5b" strokeWidth="0.6" />
            <circle cx="200" cy="200" r="60" stroke="#253d5b" strokeWidth="0.4" />
            <path d="M200 80 L200 320" stroke="#253d5b" strokeWidth="0.4" />
            <path d="M80 200 L320 200" stroke="#253d5b" strokeWidth="0.4" />
          </svg>
        </div>

        {/* ─── CONTENT ─── */}
        <div className="relative px-6 sm:px-8 md:px-10 py-10 sm:py-12 w-full">

          {/* ===== TITLE ===== */}
          <motion.div {...fadeUp()} className="text-center mb-6">
            <p className="font-['Inter',sans-serif] text-[#caa687] text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-light">
              Our Wedding Party
            </p>
            <h2 className={callig + " text-[#253d5b] text-2xl sm:text-3xl md:text-4xl leading-snug mt-1"}>
              The Entourage
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2 mb-1">
              <span className="block h-px w-8 bg-[#caa687]/25" />
              <svg className="w-3 h-3 text-[#caa687]/40" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="10" r="2" />
                <ellipse cx="10" cy="7" rx="1.5" ry="1" opacity="0.5" />
                <ellipse cx="10" cy="13" rx="1.5" ry="1" opacity="0.5" />
              </svg>
              <span className="block h-px w-8 bg-[#caa687]/25" />
            </div>
          </motion.div>

          {/* ===== PARENTS (2-column) ===== */}
          <motion.div {...fadeUp(0.04)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Parents of the Groom</span>
              {parentsGroom.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
            <div className="text-center">
              <span className={groupLabel}>Parents of the Bride</span>
              {parentsBride.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
          </motion.div>

          {/* ===== OFFICIATING MINISTERS ===== */}
          <motion.div {...fadeUp(0.07)} className="text-center mb-4">
            <span className={groupLabel}>Officiating Ministers</span>
            {officiatingMinisters.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          {/* ===== PRINCIPAL SPONSORS ===== */}
          <motion.div {...fadeUp(0.1)}>
            <div className="text-center mb-2">
              <h3 className={callig + " text-lg sm:text-xl leading-tight"}>Principal Sponsors</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md mx-auto">
              <div>
                <p className="font-['Inter',sans-serif] text-[#a3c4b5] text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-medium text-center mb-1.5">Ninongs</p>
                {ninongs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-right">{name}</p>
                ))}
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[#a3c4b5] text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-medium text-center mb-1.5">Ninangs</p>
                {ninangs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-left">{name}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== BEST MAN | MAID OF HONOR ===== */}
          <motion.div {...fadeUp(0.13)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Best Man</span>
              <p className={groupName + " mt-0.5"}>{bestMan}</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Maid of Honor</span>
              <p className={groupName + " mt-0.5"}>{maidOfHonor}</p>
            </div>
          </motion.div>

          {/* ===== GROOMSMEN | BRIDESMAIDS ===== */}
          <motion.div {...fadeUp(0.16)} className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Groomsmen</span>
              {groomsmen.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
            <div className="text-center">
              <span className={groupLabel}>Bridesmaids</span>
              {bridesmaids.map((name, i) => (
                <p key={i} className={groupName + " mt-0.5"}>{name}</p>
              ))}
            </div>
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== JUNIOR SPONSORS ===== */}
          <motion.div {...fadeUp(0.19)}>
            <div className="text-center mb-2">
              <h3 className={callig + " text-lg sm:text-xl leading-tight"}>Junior Sponsors</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-md mx-auto mb-3">
              <div>
                {juniorNinongs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-right">{name}</p>
                ))}
              </div>
              <div>
                {juniorNinangs.map((name, i) => (
                  <p key={i} className="font-['Playfair_Display',serif] text-[#253d5b] text-[9px] sm:text-[10px] leading-relaxed text-left">{name}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== CANDLE LIGHTERS ===== */}
          <motion.div {...fadeUp(0.22)} className="text-center mb-3">
            <h3 className={groupLabel}>Candle Lighters</h3>
            {candleLighters.map((pair, i) => (
              <p key={i} className={groupName + " mt-0.5"}>
                {pair.male}{pair.female ? ` & ${pair.female}` : ''}
              </p>
            ))}
          </motion.div>

          {/* ===== BEARERS ===== */}
          <motion.div {...fadeUp(0.24)} className="text-center mb-3">
            <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
              <div>
                <span className={groupLabel}>Pen Bearer</span>
                <p className={groupName + " mt-0.5"}>{penBearer}</p>
              </div>
              <div>
                <span className={groupLabel}>Bible Bearers</span>
                {bibleBearers.map((name, i) => (
                  <p key={i} className={groupName + " mt-0.5"}>{name}</p>
                ))}
              </div>
              <div>
                <span className={groupLabel}>Contract Bearer</span>
                <p className={groupName + " mt-0.5"}>{contractBearer}</p>
              </div>
            </div>
          </motion.div>

          {/* ===== LITTLE GROOM & BRIDE ===== */}
          <motion.div {...fadeUp(0.26)} className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-3">
            <div className="text-center">
              <span className={groupLabel}>Little Groom</span>
              <p className={groupName + " mt-0.5"}>{littleGroom}</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Little Bride</span>
              <p className={groupName + " mt-0.5"}>{littleBride}</p>
            </div>
          </motion.div>

          {/* ===== FLOWER GIRLS ===== */}
          <motion.div {...fadeUp(0.28)} className="text-center mb-3">
            <span className={groupLabel}>Flower Girls</span>
            {flowerGirls.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          {/* ===== BANNER BEARER ===== */}
          <motion.div {...fadeUp(0.3)} className="text-center mb-3">
            <span className={groupLabel}>Here Comes the Bride — Banner Bearer</span>
            <p className={groupName + " mt-0.5"}>{bannerBearer}</p>
          </motion.div>

          {/* ===== SINGERS ===== */}
          <motion.div {...fadeUp(0.32)} className="text-center mb-3">
            <span className={groupLabel}>Singers</span>
            {singers.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          {/* ===== HOSTS ===== */}
          <motion.div {...fadeUp(0.34)} className="text-center mb-4">
            <span className={groupLabel}>Hosts</span>
            {hosts.map((name, i) => (
              <p key={i} className={groupName + " mt-0.5"}>{name}</p>
            ))}
          </motion.div>

          <span className={sectionRule + " my-4 mx-12"} />

          {/* ===== GIFT GUIDE ===== */}
          <motion.div {...fadeUp(0.36)} className="text-center">
            <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium mb-1">
              Gift Guide
            </h3>
            <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[10px] sm:text-[11px] leading-tight max-w-xs mx-auto">
              Your presence is present enough.<br />A monetary gift would be greatly appreciated.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
