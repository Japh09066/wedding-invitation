'use client';

import { motion } from 'framer-motion';

interface EntourageMember {
  name: string;
  role: string;
}

interface EntourageGroup {
  title: string;
  subtitle?: string;
  members: EntourageMember[];
}

const entourageData: EntourageGroup[] = [
  {
    title: 'Principal Sponsors',
    members: [
      { name: 'John Francis Ontog', role: '& Francheska Alysa Ontog' },
      { name: 'Clifford Bulandi', role: '& Trixia Bulanadi' },
      { name: 'Derrick Bulanadi', role: '& Kiana Bulanadi' },
    ],
  },
  {
    title: 'Best Man',
    members: [
      { name: 'JM Bulanadi', role: 'Best Man' },
    ],
  },
  {
    title: 'Bridesmaids & Groomsmen',
    members: [
      { name: 'Amara Panganiban', role: 'Bridesmaid' },
      { name: 'Keith Zairus Nolasco', role: 'Groomsman' },
    ],
  },
  {
    title: 'Flower Maidens',
    members: [
      { name: 'Calliah Grace Aguilar', role: 'Flower Maiden' },
      { name: 'Gia Wynna Faith Aroyo', role: 'Flower Maiden' },
      { name: 'Haven Kyoko Cuales', role: 'Flower Maiden' },
    ],
  },
  {
    title: 'Ring Bearers',
    members: [
      { name: 'Jacob Zakeo Delos Santos', role: 'Ring Bearer' },
      { name: 'Aki Cabanesas', role: 'Ring Bearer' },
    ],
  },
  {
    title: 'Bible Bearers',
    members: [
      { name: 'Bible Bearers', role: '' },
    ],
  },
  {
    title: 'Coin Bearers',
    members: [
      { name: 'Coin Bearers', role: '' },
    ],
  },
  {
    title: 'Cord Sponsors',
    members: [
      { name: 'Cord Sponsors', role: '' },
    ],
  },
  {
    title: 'Candle Sponsors',
    members: [
      { name: 'Candle Sponsors', role: '' },
    ],
  },
];

function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-10">
      <span className="block h-px w-12 bg-[#caa687]/30" />
      <svg width="20" height="20" viewBox="0 0 64 64" fill="none" className="text-[#caa687]">
        <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.6" />
        <circle cx="46" cy="32" r="4" fill="currentColor" opacity="0.35" />
        <circle cx="18" cy="32" r="4" fill="currentColor" opacity="0.35" />
      </svg>
      <span className="block h-px w-12 bg-[#caa687]/30" />
    </div>
  );
}

function NameRow({ name, role, index }: { name: string; role: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="text-center"
    >
      <div className="font-serif text-lg md:text-xl lg:text-2xl text-[#253d5b] leading-relaxed">
        {name}
        {role && (
          <span className="text-[#caa687] font-sans text-sm md:text-base tracking-wider">
            {' '}{role}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function GroupSection({ group, groupIndex }: { group: EntourageGroup; groupIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: groupIndex * 0.1 }}
      className="mb-10 last:mb-0"
    >
      <h3 className="font-['Burgues_Script',serif] text-[#caa687] text-3xl md:text-4xl text-center mb-5 leading-snug">
        {group.title}
      </h3>

      {group.subtitle && (
        <p className="text-[#caa687] text-center font-sans text-xs uppercase tracking-[0.2em] mb-4">
          {group.subtitle}
        </p>
      )}

      <div className="space-y-3">
        {group.members.map((member, mIndex) => (
          <NameRow
            key={`${group.title}-${member.name}-${mIndex}`}
            name={member.name}
            role={member.role}
            index={mIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function EntourageSection() {
  return (
    <section id="entourage" className="section-padding bg-[#faf6f0]">
      <div className="section-container max-w-3xl">
        {/* Section heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#caa687] font-sans text-xs uppercase tracking-[0.3em] mb-4"
          >
            Our Wedding Party
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Burgues_Script',serif] text-5xl md:text-6xl lg:text-7xl text-[#caa687] leading-tight"
          >
            The Entourage
          </motion.h2>
        </div>

        {/* Groups */}
        <div className="space-y-6">
          {entourageData.map((group, index) => (
            <div key={group.title}>
              <GroupSection group={group} groupIndex={index} />
              {index < entourageData.length - 1 && <FloralDivider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
