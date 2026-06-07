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
    subtitle: 'Ninong & Ninang',
    members: [
      { name: 'Sponsor Name 1', role: 'Ninong' },
      { name: 'Sponsor Name 2', role: 'Ninang' },
      { name: 'Sponsor Name 3', role: 'Ninong' },
      { name: 'Sponsor Name 4', role: 'Ninang' },
    ],
  },
  {
    title: 'Best Man & Maid of Honor',
    members: [
      { name: 'Best Man Name', role: 'Best Man' },
      { name: 'Maid of Honor Name', role: 'Maid of Honor' },
    ],
  },
  {
    title: 'Bridesmaids',
    members: [
      { name: 'Bridesmaid 1', role: 'Bridesmaid' },
      { name: 'Bridesmaid 2', role: 'Bridesmaid' },
      { name: 'Bridesmaid 3', role: 'Bridesmaid' },
    ],
  },
  {
    title: 'Groomsmen',
    members: [
      { name: 'Groomsman 1', role: 'Groomsman' },
      { name: 'Groomsman 2', role: 'Groomsman' },
      { name: 'Groomsman 3', role: 'Groomsman' },
    ],
  },
];

export default function EntourageSection() {
  return (
    <section id="entourage" className="section-padding bg-gradient-to-b from-floral-bg to-floral-cream">
      {/* Decorative header */}
      <div className="section-container text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Our Wedding Party
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          The Entourage
        </motion.h2>
      </div>

      <div className="section-container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {entourageData.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.15 }}
              className="card"
            >
              {/* Group title */}
              <h3 className="font-serif text-xl md:text-2xl text-floral-deep text-center mb-1">
                {group.title}
              </h3>
              {group.subtitle && (
                <p className="font-script text-floral-gold text-center text-sm mb-4">
                  {group.subtitle}
                </p>
              )}

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 mb-5">
                <span className="block h-px w-8 bg-floral-gold/30" />
                <span className="text-floral-gold text-xs">✦</span>
                <span className="block h-px w-8 bg-floral-gold/30" />
              </div>

              {/* Members list */}
              <div className="space-y-3">
                {group.members.map((member, mIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIndex * 0.15) + (mIndex * 0.05) }}
                    className="flex items-center justify-between py-2 border-b border-floral-cream last:border-b-0"
                  >
                    <span className="font-serif text-floral-deep">
                      {member.name}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wider text-floral-gold">
                      {member.role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="divider-floral mt-16">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
