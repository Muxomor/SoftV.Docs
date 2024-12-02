import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

import { Linkedin, Twitter, GitHub } from 'react-feather';
import { DiscordIcon, LinkedInIcon, TelegramIcon } from '@site/src/icons';

const githubUsernames = [
  'CrackAndDie',
  'nirvanapro',
  'dochuva222',
  'seydametov',
  'fnway',
  'muhammadganiev',
  'PumpkinEater1488',
  'Soft-V-Creator',
  'SodiumHydrocarbonate',
  'c3n9',
  '1exsize1',
  'bbaton',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-darkestblue px-4 py-16 pt-16 text-white dark:from-zinc-200/90 dark:to-white dark:text-zinc-700">
        <h2 className="text-3xl dark:text-white">
          <Translate
            id="theme.communitySection.joinUs">
            Join the community 
          </Translate> 
        </h2>
        <p className="mb-10 text-zinc-500">
          <Translate
            id="theme.communitySection.joinUsLarge">
            Join us and be welcomed into our supportive and vibrant community. 
          </Translate>    
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=60`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://t.me/SoftVsupport_bot"
          >
            <TelegramIcon className="h-6 w-6" /> Telegram &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://github.com/Soft-V"
          >
            <GitHub className="h-5 w-5" /> GitHub &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}