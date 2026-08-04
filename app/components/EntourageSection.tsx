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
  'Pastor Mariano R. Salloman Jr.',
];

const ninongs = [
  'Ptr. Mariano R. Salloman Jr.',
  'Ptr. Benjamin S. Mahinay Jr.',
  'Ptr. Nicolas L. Palarao',
  'Ptr. Bartman M. Barrientos',
  'Ptr. Apolonio A. Pastera',
  'Ptr. Dionie A. Cientos',
  'Ptr. Jacob A. Suarez',
  'Ptr. Isaias Guisando',
  'Ptr. Glen Siega',
  'Ptr. Nicanor M. Buo',
  'Ptr. Moses A. Corro',
  'Ptr. Jonathan Muralla',
  'Ptr. Emmanuel Paul C. Barcenas',
  'Ptr. Ricardo B. De Asis',
  'Doc. Sherwin Abantao',
  'Mr. Edwin Gil',
  'Mr. Felix Dumadag',
  'Atty. Marvin J. Tanada',
  'Mr. Vedasto Buctot Jr.',
  'Mr. Elias Buctot',
  'Mr. Rudy Dadulo',
  'Mr. Ronaldo Buctot',
  'Mr. Ryan Buenaventura',
  'Mr. Gilme Laurito',
  'Engr. Virgilio Cabacang',
  'Mr. Neptali Galvan',
  'Mr. Diosdado Balingcos',
  'Mr. Amon Buctot',
  'Mr. Joseph Rago',
  'Mr. Harold Tan',
  'Mr. Jay Estela',
  'Mr. Antonio P. Masin',
  'Mr. Ric Grafil',
  'Mr. Allan Peter Makiling',
  'Doc. Arnel Arcenal',
  'Doc. Arturo V. Sarrosa Jr.',
];

const ninangs = [
  'Mrs. Leah A. Salloman',
  'Mrs. Edna B. Celeste',
  'Mrs. Charity L. Palarao',
  'Mrs. Rexy Barrientos',
  'Mrs. Gladys Blaine A. Pastera',
  'Mrs. Menchie C. Cientos',
  'Mrs. Nellie L. Suarez',
  'Mrs. Visminda Guisando',
  'Mrs. Marivic M. Siega',
  'Mrs. Annabelle A. Buo',
  'Mrs. Gercel D. Corro',
  'Mrs. Rizalie Grace Muralla',
  'Mrs. Naresh M. Barcenas',
  'Mrs. Anna Marie R. De Asis',
  'Doc. Melody Abantao',
  'Mrs. Liore Gil',
  'Mrs. Fejay Dumadag',
  'Mrs. Judy L. Aragon',
  'Mrs. Chiqui B. Buctot',
  'Mrs. Jennifer B. Buctot',
  'Mrs. Elsa Dadulo',
  'Mrs. Lucy Buctot',
  'Mrs. Joanne Buenaventura',
  'Mrs. Ester Laurito',
  'Mrs. Arlene Cabacang',
  'Mrs. Yvette Galvan',
  'Mrs. Eunice Balingcos',
  'Mrs. Ruth Buctot',
  'Doc. Jenneth Rago',
  'Mrs. Julie Ann Tan',
  'Mrs. Grace Estela',
  'Mrs. Nancy K. Masin',
  'Mrs. Rodelyn Grafil',
  'Mrs. Arlie Palarao',
  'Mrs. Jacqueline Arcenal',
  'Mrs. Loreta Mogueis',
];

const bestMan = 'Mr. Hero Guisando';
const maidOfHonor = 'Ms. Micah Pusa';

const groomsmen = [
  'Mr. Vynz Ramoso',
  'Mr. Gerhardt Celeste',
  'Mr. Clark Ruzshel Buctot',
  'Mr. Josh Miguel Laurito',
  'Mr. Vence Andrey Buctot',
  'Mr. Rafael Abantao',
  'Mr. Rogin Castillo',
  'Mr. Jud Renoir Edrial',
];

const bridesmaids = [
  'Ms. Rica Mae Bulingit',
  'Ms. Jellian Jamio',
  'Ms. Ailyn Mae Pusa',
  'Ms. Cheyenne L. Aligado',
  'Ms. Jazzel Lincuna',
  'Ms. Zhen Chloe Buctot',
  'Ms. Jennycel R. Luston',
  'Ms. Jaysyl Phincer S. Mahinay',
];

const juniorNinongs = [
  'Atty. Sunny Cientos',
  'Engr. Jusam L. Salloman',
  'Mr. Francis B. Orge',
  'Ptr. Jenboy R. Luston',
  'Ptr. Jessie M. Garzon',
  'Ptr. Jonathan E. Fernandez',
  'Ptr. John B. Carillo',
  'Ptr. Carl Glen C. Morta',
  'Ptr. Dixie Rey P. Minardo',
  'Ptr. Jimmy V. Rivera',
  'Ptr. Aronry V. Wales',
  'Ptr. Jesriel Lucero',
  'Ptr. Roland Rodriguez',
  'Mr. Jun Joshua O. Lucop',
  'Mr. Asher Bryan Diesto',
  'Mr. Elmer Kristoffer Mogueis',
  'Mr. Al Anthony Carolino',
  'Mr. Redyl Dadulo',
  'Mr. David Vacunawa',
  'Mr. Ephraim Arriesgado',
  'Mr. Rayzand Aclon',
  'Mr. Klint Isle Fuentes',
  'Mr. Kliff Fuentes',
  'Mr. Heaven Son Eyas',
  'Mr. Nepthali Gonzales',
  'Mr. Ramdy Bon Iniego',
  'Mr. Ronel Guido',
  'Doc. Bienjelou Balasa',
  'Engr. Arian Casquejo',
  'Mr. Darlbe B. Salvador',
  'Mr. Beorth Antero D. Caray',
];

const juniorNinangs = [
  'Mrs. Faith Cientos',
  'Dr. Doraine Faye R. Salloman',
  'Mrs. Joymae Shiela S. Orge',
  'Mrs. Zenith Joy Luston',
  'Mrs. Genive Ryle G. Garzon',
  'Mrs. Ana Fe C. Fernandez',
  'Mrs. Caryn Carillo',
  'Mrs. Mercy Faith S. Morta',
  'Mrs. Honey Louraine B. Minardo',
  'Mrs. Pearlie B. Rivera',
  'Mrs. Dinah P. Wales',
  'Mrs. Mary Grace Lucero',
  'Mrs. Mara Rodriguez',
  'Ms. Rima C. Justimbaste',
  'Mrs. Cherrma Lynn Diesto',
  'Mrs. Joyce Jane Mogueis',
  'Ms. Jhunna May Celeste',
  'Mrs. Jeralyn Dadulo',
  'Mrs. Nhycy Lyn M. Vacunawa',
  'Mrs. Daryle Glimph Arriesgado',
  'Ms. Anna L Padang',
  'Ms. April Kay Malundo',
  'Mrs. Kish Fuentes',
  'Mrs. Sheena Mae Eyas',
  'Doc. Marsha Ann Gonzales',
  'Mrs. Nikki Iniego',
  'Mrs. Daisy Guido',
  'Mrs. Regina Balasa',
  'Engr. Jessa Pelias',
  'Mrs. Kimberlee B. Salvador',
  'Mrs. Christine Jane C. Caray',
];

const candleLighters = [
  { male: 'Mr. Renyl Dadulo', female: 'Mrs. Marianne Joyce Dadulo' },
  { male: 'Mr. JayMark Fernandez', female: 'Mrs. Elvie Jae Fernandez' },
  { male: 'Mr. Marjem Libato', female: 'Ms. Yohann Grafil' },
  { male: 'Mr. Ryan Dave Aclon', female: 'Ms. Nhemelie Grace Buctot' },
];

const penBearer = 'Theo James Buctot';
const bibleBearers = ['Jehoash Ai Errua'];
const contractBearer = 'Zamir Adrian Buctot';
const littleGroom = 'Joaquin Mason Salloman';
const littleBride = 'Raya Ellisse Dadulo';

const flowerGirls = [
  'Xhandrei Wei Tan',
  'Heather Sky Orge',
  'Dreanna Dennisse Logroño',
  'Kirsten Jill Estela',
  'Joannah Ziah Fernandez',
  'Zara Athalia Carisse Luston',
];

const bannerBearer = 'Spring Fiel / Apple Errua';

const singers = [
  'The Cousins',
  'Lovely Bayer',
  'Mark Jayrome Daniel',
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
        {/* ─── CONTENT ─── */}
        <div className="relative px-6 sm:px-8 md:px-10 py-10 sm:py-12 w-full">

          {/* ===== TITLE ===== */}
          <motion.div {...fadeUp()} className="text-center mb-6">
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

          {/* ===== SECONDARY SPONSORS HEADING ===== */}
          <motion.div {...fadeUp(0.12)} className="text-center mb-4">
            <h3 className={callig + " text-lg sm:text-xl leading-tight"}>Secondary Sponsors</h3>
          </motion.div>

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
            <span className={groupLabel}>To Shower our Aisle with Flowers</span>
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
            <span className={groupLabel}>To Sing us Symphony</span>
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



        </div>
      </div>
    </section>
  );
}
